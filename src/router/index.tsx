import React from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
import Home from '@/views/home'
import Todo from '@/views/todo'
import Message from '@/views/message'
import PersonalCenter from '@/views/my'
import Layout from '@/views/Layout'
import Login from '@/views/Login'

const Router: React.FC = React.memo(() => {
  const element = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Navigate to="/home" />,
        },
        {
          path: 'home',
          element: <Home />,
        },
        {
          path: 'todo',
          element: <Todo />,
        },
        {
          path: 'message',
          element: <Message />,
        },
        {
          path: 'me',
          element: <PersonalCenter />,
        },
      ],
    },
    {
      path: 'login',
      element: <Login />,
    },

    {
      path: '*',
      element: <Navigate to="/" />,
    },
  ])

  return element
})

export default Router
