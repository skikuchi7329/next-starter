import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { store } from '../src/app/store'
import { Provider } from 'react-redux'
import { Counter } from '../src/features/counter/counter'


const Home: NextPage = () => {
  return (
    <Counter />
  )
}

export default Home
