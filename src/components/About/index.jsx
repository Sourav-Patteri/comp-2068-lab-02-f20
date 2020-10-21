import React from 'react';
import Header from '../shared/Header';
import Styles from './styles';


const About = () => {
  return (
    <>
      {/* You need to use your shared header component... */}
      <Header title="About"/>
      {/* You need a paragraph describing a fun fact about you */}
      <Styles.para>
        Mm a fun thing about myself.. There's not much I can think of. I'm an ardent reader and love classic novels. Some of my favourites are "The Count of Monte Cristo" by Alexandre Dumas, "The Book Thief" by Markus Zusak and "Dracula" by Bram Stoker and I finished each within a week or two. 
      </Styles.para>
    </>
  );
}
 
export default About;