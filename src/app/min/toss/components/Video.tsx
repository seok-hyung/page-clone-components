import React from 'react'

export default function Video() {
  return (
    <video
      className="w-full h-full"
      poster="https://common-fe.toss.im/resources/adaptive?light=https%3A%2F%2Fcore-cdn-fe.toss.im%2Fvideo%2Fframe%2F%3Fsource%3Dhttps%3A%2F%2Fstatic.toss.im%2Fhomepage-static%2Fnewtoss%2Fnew-journey-bg.mp4%26t%3D00%3A00%3A00.000&amp;dark=https%3A%2F%2Fcore-cdn-fe.toss.im%2Fvideo%2Fframe%2F%3Fsource%3Dhttps%3A%2F%2Fstatic.toss.im%2Fhomepage-static%2Fnewtoss%2Fnew-journey-bg.mp4%26t%3D00%3A00%3A00.000&amp;lowlight=https%3A%2F%2Fcore-cdn-fe.toss.im%2Fvideo%2Fframe%2F%3Fsource%3Dhttps%3A%2F%2Fstatic.toss.im%2Fhomepage-static%2Fnewtoss%2Fnew-journey-bg.mp4%26t%3D00%3A00%3A00.000&amp;lowdark=https%3A%2F%2Fcore-cdn-fe.toss.im%2Fvideo%2Fframe%2F%3Fsource%3Dhttps%3A%2F%2Fstatic.toss.im%2Fhomepage-static%2Fnewtoss%2Fnew-journey-bg.mp4%26t%3D00%3A00%3A00.000"
      autoPlay
      loop
      muted
      playsInline
      id="journey-video-1">
      <source src="https://static.toss.im/homepage-static/newtoss/new-journey-bg.mp4" type="video/mp4"></source>
    </video>
  )
}
