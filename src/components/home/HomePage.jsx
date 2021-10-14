import React from 'react'
import Intro from './intro/Intro'
import Concepts from './concepts/Concepts'
import Codes from './codes/Codes'
import Subscription from './subscription/Subscription'
import Imageption from './imageption/Imageption'

export default function HomePage() {
    return (
        <div className="sections">
        <Intro />
        <Concepts/>
        <Codes/>
        <Imageption/>
        <Subscription />
      </div>
    )
}
