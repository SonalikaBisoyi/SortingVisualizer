// import React,{useState} from "react";
// import {Box,Button,Flex,Select} from '@chakra-ui/react';
// import {bubbleSort,selectionSort,insertionSort,mergeSort,quickSort} from '../sortingAlgorithms';
// import ArrayBars from './ArrayBars';

// const SortingVisualiser = () => {
//     const [array,setArray] = useState([]);
//     const [sorting, setSorting] = useState(false);
//     const [speed, setSpeed] = useState(50);
//     const [algorithm,setAlgorithm] = useState('bubble');
//     const [sorted, setSorted] = useState(false);

    
//     const generateArray = () => {
//         const newArray = [];
//         for(let i = 0; i < 50; i++){
//             newArray.push(Math.floor(Math.random() * 100)+1);
//         }
//         setArray(newArray);
//         setSorting(false);
//         setSorted(false);
//     };

//     const startSorting = async () => {
//         setSorting(true);
//         switch (algorithm) {
//             case 'bubble':
//                 await bubbleSort(array,speed);
//                 break;
//             case 'selection':
//                 await selectionSort(array,speed);
//                 break;    
//             case 'insertion':
//                 await insertionSort(array,speed);
//                 break;     
//             case 'merge':
//                 await mergeSort(array,speed);
//                 break;   
//             case 'quick':
//                 await quickSort(array,speed);
//                 break;  
//             default:
//                 break;       
//         }
//         setSorting(false);
//         setSorted(true);
//     };

//     return(
//         <Box p={4}>
//             <Flex align="center" justify="center" mb={4}>
//                 <Button onClick={generateArray} mr={2} disabled={sorting|| sorted} fontSize={{ base: "16px", md: "20px", lg: "10px" }}>Generate <br />New Array</Button>
//                 <Button onClick={startSorting} mr={2} disabled={sorting|| sorted} fontSize={{ base: "16px", md: "20px", lg: "10px" }}>Start <br />Sorting</Button>
//                 <Select value={algorithm} onChange={(e) => setAlgorithm(e.target.value)} mr={4} disabled={sorting|| sorted}>
//                     <option value="bubble">Bubble Sort</option>
//                     <option value="selection">Selection Sort</option>
//                     <option value="insertion">Insertion Sort</option>
//                     <option value="merge">Merge Sort</option>
//                     <option value="quick">Quick Sort</option>
//                 </Select>
//                 <Select value={speed} onChange={(e) => setSpeed(e.target.value)} disabled={sorting|| sorted}>
//                     <option value={10}>Fast</option>
//                     <option value={50}>Medium</option>
//                     <option value={100}>Slow</option>
//                 </Select>
//             </Flex>
//             <ArrayBars array={array} sorting={sorting} sorted={sorted}/>
//         </Box>
//     );
// };
// export default SortingVisualiser;


import React, { useState } from 'react';
import { Box, Button, Flex, Select } from '@chakra-ui/react';
import { bubbleSort, selectionSort, insertionSort, mergeSort, quickSort } from '../sortingAlgorithms';
import ArrayBars from './ArrayBars';

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState([]); // Initialize sorting state as an empty array
  const [sorted, setSorted] = useState(false);
  const [algorithm, setAlgorithm] = useState('bubble');
  const [speed, setSpeed] = useState(50);

  const generateArray = () => {
    const newArray = [];
    for (let i = 0; i < 50; i++) {
      newArray.push(Math.floor(Math.random() * 100) + 1);
    }
    setArray(newArray);
    setSorting([]); // Reset sorting state when generating a new array
    setSorted(false);
  };

  const startSorting = async () => {
    setSorting([]); // Reset sorting state before starting sorting
    switch (algorithm) {
      case 'bubble':
        await bubbleSort(array, speed, setSorting);
        break;
      case 'selection':
        await selectionSort(array, speed, setSorting);
        break;
      case 'insertion':
        await insertionSort(array, speed, setSorting);
        break;
      case 'merge':
        await mergeSort(array, speed, setSorting);
        break;
      case 'quick':
        await quickSort(array, speed, setSorting);
        break;
      default:
        break;
    }
    setSorted(true);
  };

  return (
    <Box p={4}>
      <Flex align="center" justify="center" mb={4}>
        <Button onClick={generateArray} mr={4} disabled={sorting.length > 0 || sorted} fontSize={{ base: "16px", md: "20px", lg: "10px" }}>Generate<br/> New Array</Button>
        <Button onClick={startSorting} mr={4} disabled={sorting.length > 0 || sorted} fontSize={{ base: "16px", md: "20px", lg: "10px" }}>Start <br/>Sorting</Button>
        <Select value={algorithm} onChange={(e) => setAlgorithm(e.target.value)} mr={4} disabled={sorting.length > 0 || sorted}>
          <option value="bubble">Bubble Sort</option>
          <option value="selection">Selection Sort</option>
          <option value="insertion">Insertion Sort</option>
          <option value="merge">Merge Sort</option>
          <option value="quick">Quick Sort</option>
        </Select>
        <Select value={speed} onChange={(e) => setSpeed(e.target.value)} disabled={sorting.length > 0 || sorted}>
          <option value={10}>Fast</option>
          <option value={50}>Medium</option>
          <option value={100}>Slow</option>
        </Select>
      </Flex>
      <ArrayBars array={array} sorting={sorting} sorted={sorted} isNewArray={sorting.length === 0}/>
    </Box>
  );
};

export default SortingVisualizer;
