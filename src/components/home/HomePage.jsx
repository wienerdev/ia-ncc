import React from 'react'
import Intro from './intro/Intro'
import Objectives from './objectives/Objectives'
import Subscription from './subscription/Subscription'

export default function HomePage() {
    return (
        <div className="sections">
        <Intro />
        <Objectives/>
        <Subscription />
      </div>
    )
}
