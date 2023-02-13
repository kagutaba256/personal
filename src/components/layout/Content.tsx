import React from 'react'
import Sidebar from './Sidebar'

type Props = {
  children: React.ReactNode
}

function Content(props: Props) {
  return (
    <>
      <section id='main'>
        <Sidebar />
        <div id='page'>
          <div id='content'>{props.children}</div>
        </div>
      </section>
    </>
  )
}

export default Content
