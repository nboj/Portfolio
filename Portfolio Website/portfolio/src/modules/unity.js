import React from 'react';
import Carousel from './carousel';
import Card from './card'; 

const Unity = () => {
    return(
        <div id='unity'>
            <h1 id='title'>Unity</h1>
            <p id='unity-description'>Take a look at some of my creations and learn about my journey to become a game developer.</p>
            <div className='carousel'>
          <Carousel 
          cards = {[
            <Card src='https://dsm01pap001files.storage.live.com/y4mf2eZ7zHDygDIBJPBcfonOoIXxG5XA3RlAwPAAD9YaVBi2hfqPQcDK4XCqz4XmbyzlEzj_VlQag-K-vctqtkflQyVu3T1W56VwpIN_WDvY_2LMenjH-i_Kpu71ZlRyhqlmI-tAJyJ9c-0IuMx4YsgCkO7pXxLI3cLTE82FWgtWcMrc8uIIv6HCJCDZ7yT4DUk?width=1334&height=750&cropmode=none' 
              title='PooperPunk'
              description="This was among one of the first games that i've ever made! It features a dynamic 'choose your own path' system with a good storyline."
              href='/PooperPunk'
            />,
            <Card src='https://bl6pap003files.storage.live.com/y4mDXHWEzzap4XZHLIKvVPJGJ_vPGwlMuwqGtzi7uKIKO5tTljIe19lOyLuz7pPlDTRlp3gEcN8PYV3LoPOgb9VE3UZleiBBJl1TMMOHYQsPTtZYVvLvS3vz1WKCYFYMEJRX2uJlHh2Bx4y1f79kRtKhSJVqvcKM-y5UA3op1zRrr153i1DJ2i9H2Rd1zZPWeW3?width=1334&height=750&cropmode=none' 
              title='Number Wizard'
              description='Number Wizard is a spin off of a very basic game that most programmers learn to make. It will eventually guess the number that you have in your head using basic math and logic.'
              href='/NumberWizard'
            />,
            <Card src='https://bl6pap003files.storage.live.com/y4mQ6g73PxrW1G6wSCLNE6xu1WNzMpKS4C9pbbVzr2vfuZDheJErFZ9Of9WsATMuCiairzEqjJeCB3HA55_4YidP0F2-V-Cjm2VkZyOvllSYbvIRUpf7wiMKG1NsxLKc5yb_kxeYdWiwpUgY2x1ctJYOpL81XtGQ7O3X3lrAoBC5sVoDxIfFbhSbv5wo3NXgfvQ?width=1334&height=750&cropmode=none' 
              title='Block Breaker'
              description="This game was one of the first BIG games that i've made. This was the game that taught me the most about unity's 2D engine."
              href='/BlockBreaker'
            />,
            <Card src='https://bl6pap003files.storage.live.com/y4mbG7AE4JqapG8OgvXNChAMXy_NOv6esQjJSsPXRi-rEpevw4IWdbS6nz1Pi6NexouLOdjy0xzDmI2ZONB3loo9J9oxB9n5BUfGSUkSjlX27Zn59aXHSZ5Dukd46KA0I-k_bcLF6y0hwOOEVQaXLJyTaU7sFm_J-quawnnT7Z1OtQjy25vzIliN4C-zq7F6wWK?width=1334&height=750&cropmode=none'
              title='2D Platformer'
              description="This game doesn't have a name because I never fully completed it. This game was the first time I tried to use tilemaps and some other features that I had to learn."
              href='/Platformer'
            />,
          ]}/>
        </div>
      </div>
    );
}

export default Unity;