import React from 'react';
import { Container, Row, Box } from '../components/';
// import './Demo.scss';

const Demo = () => {
  return (
    <Container twClasses={''} FULL={false} pageTitle={'Demo'}>
      <Row twClasses={'prose'}>
        <h1 className="h1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit
        </h1>
        <h2 className="h2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit
        </h2>
        <h3 className="h3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit
        </h3>
        <p>
          Possimus et, ex eum rem mollitia totam eius ad, sapiente eos maiores
          voluptatum, explicabo harum quos dolores nemo eaque reprehenderit quo.
          Iure. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Possimus et, ex eum rem mollitia totam eius ad, sapiente eos maiores
          voluptatum, explicabo harum quos dolores nemo eaque reprehenderit quo.
          Iure.Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Possimus et, ex eum rem mollitia totam eius ad, sapiente eos maiores
          voluptatum, explicabo harum quos dolores nemo eaque reprehenderit quo.
          Iure.Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Possimus et, ex eum rem mollitia totam eius ad, sapiente eos maiores
          voluptatum, explicabo harum quos dolores nemo eaque reprehenderit quo.
          Iure.Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Possimus et, ex eum rem mollitia totam eius ad, sapiente eos maiores
          voluptatum, explicabo harum quos dolores nemo eaque reprehenderit quo.
          Iure.
        </p>
      </Row>
      {/* <Row twClasses={'flex flex-wrap justify-between mt-5'}> */}
      <Row twClasses={'grid grid-auto-fit gap-5 my-5'}>
        <Box twClasses={'min-w-min p-10 border'}>
          {/* <Box twClasses={'xl:w-[750px] p-4 border m-2'}> */}
          {/* <Box twClasses={'w-[48%] p-10 border '}> */}
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            et, ex eum rem mollitia totam eius ad, sapiente eos maiores
            voluptatum, explicabo harum quos dolores nemo eaque reprehenderit
            quo. Iure.
          </p>
        </Box>
        <Box twClasses={'min-w-min p-10 border'}>
          {/* <Box twClasses={'xl:w-[750px] p-4 border m-2'}> */}
          {/* <Box twClasses={'w-[48%] p-10 border '}> */}
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            et, ex eum rem mollitia totam eius ad, sapiente eos maiores
            voluptatum, explicabo harum quos dolores nemo eaque reprehenderit
            quo. Iure.
          </p>
        </Box>
      </Row>
      <Row twClasses={'flex flex-wrap justify-between'}>
        <Box twClasses={'w-80 p-2 my-5 border'}>
          <img
            src="https://picsum.photos/id/12/350/300"
            className="mb-3 min-w-full rounded-full"
            alt=""
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            et, ex eum rem mollitia totam eius ad, sapiente eos maiores
            voluptatum, explicabo harum quos dolores nemo eaque reprehenderit
            quo. Iure.
          </p>
        </Box>
        <Box twClasses={'w-80 p-2 my-5 border'}>
          <img
            src="https://picsum.photos/id/16/350/300"
            className="mb-3 min-w-full rounded-full"
            alt=""
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            et, ex eum rem mollitia totam eius ad, sapiente eos maiores
            voluptatum, explicabo harum quos dolores nemo eaque reprehenderit
            quo. Iure.
          </p>
        </Box>
        <Box twClasses={'w-80 p-2 my-5 border'}>
          <img
            src="https://picsum.photos/id/15/350/300"
            className="mb-3 min-w-full rounded-full"
            alt=""
          />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, id
          exercitationem ratione, consequatur earum accusamus at vero magni
          veritatis ipsa blanditiis officia repudiandae fugiat sequi aperiam
          incidunt pariatur a odio.
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            et, ex eum rem mollitia totam eius ad, sapiente eos maiores
            voluptatum, explicabo harum quos dolores nemo eaque reprehenderit
            quo. Iure.
          </p>
        </Box>
        <Box twClasses={'w-80 p-2 my-5 border'}>
          <img
            src="https://picsum.photos/id/61/350/300"
            className="mb-3 min-w-full rounded-full"
            alt=""
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            et, ex eum rem mollitia totam eius ad, sapiente eos maiores
            voluptatum, explicabo harum quos dolores nemo eaque reprehenderit
            quo. Iure.
          </p>
        </Box>
      </Row>
      <Row twClasses={'flex flex-wrap'}>
        <Box twClasses={'w-54 p-5'}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            et, ex eum rem mollitia totam eius ad, sapiente eos maiores
            voluptatum, explicabo harum quos dolores nemo eaque reprehenderit
            quo. Iure.
          </p>
        </Box>

        <Box twClasses={'w-54 p-5'}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            et, ex eum rem mollitia totam eius ad, sapiente eos maiores
            voluptatum, explicabo harum quos dolores nemo eaque reprehenderit
            quo. Iure.
          </p>
        </Box>

        <Box twClasses={'w-54 p-5'}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            et, ex eum rem mollitia totam eius ad, sapiente eos maiores
            voluptatum, explicabo harum quos dolores nemo eaque reprehenderit
            quo. Iure.
          </p>
        </Box>

        <Box twClasses={'w-54 p-5'}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            et, ex eum rem mollitia totam eius ad, sapiente eos maiores
            voluptatum, explicabo harum quos dolores nemo eaque reprehenderit
            quo. Iure.
          </p>
        </Box>
      </Row>
      <Row twClasses={'min-w-full text-center prose my-5'}>
        <h2>Tailwind Grid</h2>
      </Row>
      <Row
        twClasses={
          'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3'
        }
      >
        <Box twClasses={'p-3 border shadow-lg'}>
          <img
            src="https://picsum.photos/id/62/350/300"
            className="mb-3 min-w-full rounded-full"
            alt=""
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            et, ex eum rem mollitia totam eius ad, sapiente eos maiores
            voluptatum, explicabo harum quos dolores nemo eaque reprehenderit
            quo. Iure.
          </p>
        </Box>
        <Box twClasses={'p-3 border shadow-lg'}>
          <img
            src="https://picsum.photos/id/63/350/300"
            className="mb-3 min-w-full rounded-full"
            alt=""
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            et, ex eum rem mollitia totam eius ad, sapiente eos maiores
            voluptatum, explicabo harum quos dolores nemo eaque reprehenderit
            quo. Iure.
          </p>
        </Box>
        <Box twClasses={'p-3 border shadow-lg'}>
          <img
            src="https://picsum.photos/id/64/350/300"
            className="mb-3 min-w-full rounded-full"
            alt=""
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            et, ex eum rem mollitia totam eius ad, sapiente eos maiores
            voluptatum, explicabo harum quos dolores nemo eaque reprehenderit
            quo. Iure.
          </p>
        </Box>
        <Box twClasses={'p-3 border shadow-lg'}>
          <img
            src="https://picsum.photos/id/65/350/300"
            className="mb-3 min-w-full rounded-full"
            alt=""
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            et, ex eum rem mollitia totam eius ad, sapiente eos maiores
            voluptatum, explicabo harum quos dolores nemo eaque reprehenderit
            quo. Iure.
          </p>
        </Box>
        <Box twClasses={'p-3 border shadow-lg'}>
          <img
            src="https://picsum.photos/id/66/350/300"
            className="mb-3 min-w-full rounded-full"
            alt=""
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            et, ex eum rem mollitia totam eius ad, sapiente eos maiores
            voluptatum, explicabo harum quos dolores nemo eaque reprehenderit
            quo. Iure.
          </p>
        </Box>
        <Box twClasses={'p-3 border shadow-lg'}>
          <img
            src="https://picsum.photos/id/67/350/300"
            className="mb-3 min-w-full rounded-full"
            alt=""
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            et, ex eum rem mollitia totam eius ad, sapiente eos maiores
            voluptatum, explicabo harum quos dolores nemo eaque reprehenderit
            quo. Iure.
          </p>
        </Box>
      </Row>
      <Row twClasses={'min-w-full text-center prose my-5'}>
        <h2>Tailwind Grid with Plugin</h2>
      </Row>
      <Row twClasses={'grid gap-5 grid-auto-fit p-3'}>
        <Box twClasses={'p-10 border border-cyan-300 shadow-xl'}>
          <img
            src="https://picsum.photos/id/62/350/300"
            className="mb-3 min-w-full rounded-full"
            alt=""
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            et, ex eum rem mollitia totam eius ad, sapiente eos maiores
            voluptatum, explicabo harum quos dolores nemo eaque reprehenderit
            quo. Iure.
          </p>
        </Box>
        <Box twClasses={'p-10 border border-cyan-300 shadow-xl'}>
          <img
            src="https://picsum.photos/id/63/350/300"
            className="mb-3 min-w-full rounded-full"
            alt=""
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            et, ex eum rem mollitia totam eius ad, sapiente eos maiores
            voluptatum, explicabo harum quos dolores nemo eaque reprehenderit
            quo. Iure.
          </p>
        </Box>
        <Box twClasses={'p-10 border border-cyan-300 shadow-xl'}>
          <img
            src="https://picsum.photos/id/64/350/300"
            className="mb-3 min-w-full rounded-full"
            alt=""
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            et, ex eum rem mollitia totam eius ad, sapiente eos maiores
            voluptatum, explicabo harum quos dolores nemo eaque reprehenderit
            quo. Iure.
          </p>
        </Box>
        <Box twClasses={'p-10 border border-cyan-300 shadow-xl'}>
          <img
            src="https://picsum.photos/id/65/350/300"
            className="mb-3 min-w-full rounded-full"
            alt=""
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            et, ex eum rem mollitia totam eius ad, sapiente eos maiores
            voluptatum, explicabo harum quos dolores nemo eaque reprehenderit
            quo. Iure.
          </p>
        </Box>
        <Box twClasses={'p-10 border border-cyan-300 shadow-xl'}>
          <img
            src="https://picsum.photos/id/66/350/300"
            className="mb-3 min-w-full rounded-full"
            alt=""
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            et, ex eum rem mollitia totam eius ad, sapiente eos maiores
            voluptatum, explicabo harum quos dolores nemo eaque reprehenderit
            quo. Iure.
          </p>
        </Box>
        <Box twClasses={'p-10 border border-cyan-300 shadow-xl'}>
          <img
            src="https://picsum.photos/id/67/350/300"
            className="mb-3 min-w-full rounded-full"
            alt=""
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            et, ex eum rem mollitia totam eius ad, sapiente eos maiores
            voluptatum, explicabo harum quos dolores nemo eaque reprehenderit
            quo. Iure.
          </p>
        </Box>
      </Row>
    </Container>
  );
};

export default Demo;
