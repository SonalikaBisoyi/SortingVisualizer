import React from "react";
import {Box} from '@chakra-ui/react';

const ArrayBars = ({ array, sorting, sorted,isNewArray}) => {
    console.log("sorting array:", sorting); // Add this console log to check the value of the sorting array
  
    return (
        <Box display="flex" justifyContent="center">
          {array.map((value, idx) => (
            <Box
              key={idx}
              h={`${value * 3}px`}
              w="20px"
              bg={
            //     sorting && !sorted ?
            //   idx === sorting[0] || idx === sorting[1] ? 'red.400' : 'yellow.400' // Change color to red for elements being compared
            //   : sorted ? 'green.400' : 'blue.400' // Color for sorted elements and final sorted array
            isNewArray ? 'blue.400' :
            sorting && !sorted ?
              idx === sorting[0] || idx === sorting[1] ? 'red.400' : 'yellow.400'
              : sorted ? 'green.400' : 'blue.400'
          }
              mr="2px"
              borderRadius="3px"
            />
          ))}
        </Box>
      );
    };
export default ArrayBars;