import { getSession } from 'next-auth/client'
import Head from 'next/head'
import Header from '../components/Header/Header'
import Login from '../components/Login/Login';

export default function Home({ session }) {
  if (!session) return <Login />;
  return (
    <div>
      <Header />
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