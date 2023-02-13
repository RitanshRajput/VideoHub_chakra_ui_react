import React from 'react' ;
import { Box, Image, Heading, Container, Stack, Text } from '@chakra-ui/react' ;
import { Carousel } from 'react-responsive-carousel' ;         /** import carousel itself */
import 'react-responsive-carousel/lib/styles/carousel.min.css' ;  /**import css file for carousel */
import  img1 from '../Assests/1.jpg' ;
import  img2 from '../Assests/2.jpg' ;
import  img3 from '../Assests/3.jpg' ;
import  img4 from '../Assests/4.jpg' ;
import  img5 from '../Assests/5.png' ;

const headingOption = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)" ,
    textTransform: "uppercase",
    p: '4',
    size: '4xl'
} ;

const Home = () => {
  return (
    <Box >
     <MyCarousel />

      <Container maxW={'container.xl'} minH={'100vh'}  >
       <Heading 
       textTransform={"uppercase"} 
       py="2" 
       w={"fit-content"}
       borderBottom={'2px solid'}
       m="auto"
        >
        Services
       </Heading>

       <Stack 
       h="full"
       p={'4'}
       alignItems={"center"}
       direction={['column' , 'row']}         /**** chakra-ui direction property helps to set responsive direction in single line using array [forPhone, forBigScreen] */
        >
    
       <Image src={img5} h={['40', '400']} filter={"hue-rotate(-130deg)"} />

        <Text 
        letterSpacing={"widset"}
        lineHeight={"190%"}
        p={["4","16"]}
        textAlign={"center"}
            >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, excepturi asperiores cupiditate enim assumenda reiciendis veniam. Perspiciatis quidem adipisci iusto libero, deserunt sint ut temporibus natus quaerat, est voluptatibus dolorem sunt corrupti! Quidem cumque vel reiciendis, autem laudantium ab non repellendus. Illum consequatur expedita earum, eum repudiandae optio corrupti velit rem nisi totam dolorum debitis nam eaque, id assumenda odio fuga, explicabo voluptatum ratione modi! Delectus saepe sint doloremque veniam odio tempore dolore eos distinctio est voluptatem, earum sunt iure porro minus laborum! Facilis rerum architecto nam et laborum a, tenetur amet pariatur, repellendus ipsam dolorum temporibus aspernatur sequi nobis ducimus. Repellat alias repellendus voluptate possimus iure ipsam dolorum odio dignissimos officiis nihil explicabo, rem nulla atque. Doloribus, et ratione.
        </Text> 
       </Stack>
     </Container>
    </Box>
  ) 
} ;


const MyCarousel = () => (
    <Carousel 
    autoPlay 
    infiniteLoop 
    interval={1500} 
    showStatus={false} 
    showThumbs={false} 
    showArrows={false}
     >

    <Box w="full" h={'100vh'} >
     <Image src={img1} />
     <Heading bgColor={"blackAplha.600"} color={"white"} {...headingOption} >
        Watch The Future
     </Heading>
    </Box>

    <Box w="full" h={'100vh'} >
     <Image src={img2} />
     <Heading bgColor={"blackAplha.600"} color={"white"} {...headingOption} >
        Future Is Gaming
     </Heading>
    </Box>


    <Box w="full" h={'100vh'} >
     <Image src={img3} />
     <Heading bgColor={"blackAplha.600"} color={"white"} {...headingOption} >
        Gaming on Console
     </Heading>
    </Box>

    
    <Box w="full" h={'100vh'} >
     <Image src={img4} />
     <Heading bgColor={"blackAplha.600"} color={"white"} {...headingOption} >
        Dive Deep in Imagination
     </Heading>
    </Box>
 

    </Carousel>
)


export default Home
