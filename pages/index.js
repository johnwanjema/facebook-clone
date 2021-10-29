import { getSession } from 'next-auth/client'
import Head from 'next/head'
import Feed from '../components/feed/Feed';
import Header from '../components/Header/Header'
import Login from '../components/Login/Login';
import Sidebar from '../components/sidebar/Sidebar';

export default function Home({ session }) {
  if (!session) return <Login />;
  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Header />
      <main className='flex'>
        <Sidebar/>
        <Feed/>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  //Get the user
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }

}