import React from 'react'

type Props = {}

function About({}: Props) {
  return (
    <section id='about' className="h-screen flex">
      <div className="bg-fakeBlack z-20 w-full h-full flex justify-center items-center">
        <div className="bg-white w-11/12 py-4 px-2">
          <h2 className="font-display text-2xl mb-2">About</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            eligendi illo quidem animi harum officia fugit qui porro accusamus
            nemo voluptas, nobis ut! Dolores quis incidunt, provident,
            distinctio dolor iste, quisquam error unde nesciunt culpa velit
            dolorem debitis sed ratione tempora officia. Numquam harum
            dignissimos, rem sapiente, exercitationem blanditiis aliquam quae
            assumenda libero veniam maiores, nesciunt itaque veritatis facilis
            aspernatur odit magni esse repellat inventore! Optio quae
            necessitatibus blanditiis maiores.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About