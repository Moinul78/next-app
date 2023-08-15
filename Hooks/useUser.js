import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import req from '../utils/network/req';

/**
 * Custom React Hook: useUser
 *
 * This hook provides functionalities related to user management and authentication.
 * It handles user login, registration, profile update, logout, and other user-related operations.
 * Additionally, it allows checking user roles and fetching user information.
 *
 * @returns {{
*   user: object|null,
*   setUser: function,
*   isLoading: boolean,
*   logIn: function,
*   registerUser: function,
*   updateOwn: function,
*   updateOne: function,
*   getUserProfile: function,
*   logout: function,
*   removeUser: function,
*   checkRole: function,
*   selectApps: array,
*   setSelectedApps: function,
*   allusers: array,
*   setAllUsers: function,
*   isAdmin: boolean,
*   allActivities: array,
*   error: string,
* }}
*/

const useUser = () => {
  const router = useRouter()
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectApps, setSelectedApps] = useState([]);
  const [allusers, setAllUsers] = useState([]);
  const [allActivities, setAllActivities] = useState([]);
  const [error, setError] = useState('');



  const checkRole = (role) => role.includes(user?.role);
  const isAdmin = user?.role === 'admin' || user?.role === 'super-admin';

  useEffect(() => {
    (async () => {
      try {
        const userResponse = await req({ target: 'me' });
        setUser(userResponse);
        setSelectedApps(userResponse.app);

        if (isAdmin) {
          const usersResponse = await req({ target: 'users' });
          setAllUsers(usersResponse);

          const userActivities = await req({ target: 'activities' });
          setAllActivities(userActivities);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [isAdmin]);

  const logIn = (data) => new Promise((resolve, reject) => {
    req({ target: 'login', body: data })
      .then((res) => {
        localStorage.setItem('token', res.token);
        window.electron.sendUser(res);
        setUser(res);
        if (res.role === 'user') {
          router.push('/home')
          setError('');
        }
        if (res.role === 'admin' || res.role === 'super admin') {
          router.push('/')
        }
        resolve();
      })
      .catch((err) => {
        const errorMessage = err.response?.data?.message || 'An error occurred during login.';
        setError(errorMessage);
        reject(errorMessage);
      });
  });

  const registerUser = (data) => {
    req({ target: 'registerUser', body: data })
      .then((res) => {
        setAllUsers(([...prev]) => ([...prev, res]));
        router.push('/')
      })
      .catch((err) => console.log(err));
  };

  const updateOwn = (data) => {
    req({ target: 'updateOwn', body: data })
      .then((res) => {
        console.log(res);
        setUser(res);
        setAllUsers(([...prev]) => (prev.map((p) => (p.id === res.id ? res : p))));
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const updateOne = (id, data) => {
    req({ target: 'updateOne', param: id, body: data })
      .then((res) => {
        setAllUsers(([...prev]) => (prev.map((p) => (p.id === res.id ? res : p))));
      })
      .catch((err) => console.log(err));
  };

  const getUserProfile = (id) => {
    req({ target: 'userProfile', params: { id } })
      .then((res) => res)
      .catch((err) => console.log(err));
  };

  const logout = () => {
    req({ target: 'logout' })
      .then(() => {
        window.electron.sendUser(null);
        localStorage.removeItem('token');
        router.push('/login')
        setUser(null);
        setError('');
        setSelectedApps([]);
        setAllUsers([]);
        setAllActivities([]);
      })
      .catch((err) => console.log(err));
  };

  const removeUser = (id) => {
    req({ target: 'removeUser', param: id })
      .then(() => {
        setAllUsers((prevUsers) => prevUsers.filter((e) => e.id !== id));
      })
      .catch((err) => console.log(err));
  };

  return {
    user,
    setUser,
    isLoading,
    logIn,
    registerUser,
    updateOwn,
    updateOne,
    getUserProfile,
    logout,
    removeUser,
    checkRole,
    selectApps,
    setSelectedApps,
    allusers,
    setAllUsers,
    isAdmin,
    allActivities,
    error,
  };
};

export default useUser;
