import sonar from "./Card_image/sonar.png"
import chat from "./Card_image/chat.png"
import personalweb1 from "./Card_image/personalweb1.png"
import ssh from "./Card_image/ssh-server.png"
import hada from "./Card_image/hada.png"
import todo from "./Card_image/cs411.png"
import finds from "./Card_image/finds.png"
import pagerank from "./Card_image/pagerank.png"
import katApp from "./Card_image/katapp.png"
import unixFunction from "./Card_image/unix-function.png"
import matrix3D from "./Card_image/3d_matrix.png"
import rsa from "./Card_image/rsa.png"
import dna_seq from "./Card_image/dna_seq.png"
import aStar from "./Card_image/aStar.png"
import bacon from "./Card_image/bacon.png"
import atomic from "./Card_image/atomic.png"
import BTS from "./Card_image/bst.png"
import dijkstra from "./Card_image/dikjstra.png"
import MIS from "./Card_image/mtf.png"
import BubbleSort from "./Card_image/sorting.png"
import IO from "./Card_image/unix-function.png"
import cmd from "./Card_image/unix-function.png"
import gausElm from "./Card_image/matrix_op.png"
import matrixOP from "./Card_image/matrix_op.png"
import vectorMul from "./Card_image/vector.png"

const CardData = [
    {
        theme: "linear-gradient(to right, #b0bec5, #90a4ae)",
        img: sonar,
        title: "Sonar TCP Server",
        language: "C language",
        description: "A server that receives data from an Arduino-based sonar system, logging the distance and angle of detected objects.",
        addr:"https://github.com/SPC-Toad/sonar-tcp-server",
        color: "#212121"
    },
    {
        theme: "linear-gradient(to right, #cfd8dc, #eceff1)",
        img: chat,
        title: "Private Chat Server",
        language: "C language",
        description: "Simple multithreaded chat server written in C, utilizing socket programming and select() to handle multiple clients simultaneously.",
        addr:"https://github.com/SPC-Toad/c-chat-server",
        color: "#37474f"
    },
    {
        theme: "linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)",
        img: ssh,
        title: "SSH Server",
        language: "C language",
        description: "Changed the port number for remote ssh server on my machine to avoid possible port 22 attacks from Foreign Entity",
        addr:"https://github.com/SPC-Toad/ssh-server",
        color: "#1b5e20"
    },
    {
        theme: "linear-gradient(to right, #ffe082, #ffca28)",
        img: personalweb1,
        title: "Portfolio Website",
        language: "React JS",
        description: "This was my previous portfolio website",
        addr:"https://github.com/SPC-Toad/Crisp_professional-website",
        color: "#ff8f00"
    },
    {
        color: "#1b5e20",
        theme: "linear-gradient(to right, #aed581, #81d4fa)",
        img: hada,
        title: 'Hada',
        language: 'React Native',
        description: 'Hada is a Korean flashcard learning app that leverages the power of spaced repetition to optimize the learning process.',
        addr:"https://github.com/Project-Hada/Hada-App-Client"
    },
    {
        color: "#000000",
        theme: "linear-gradient(to right, #e0e0e0, #757575)",
        img: finds,
        title: 'Unix File String Search',
        language: 'C language',
        description: '"Finds" is a powerful command-line tool designed to search for a specified string within files and directories.',
        addr: 'https://github.com/SPC-Toad/unix_file_string_search',
    },
    {
        color: "#333333",
        theme: "linear-gradient(to right, #e0e0e0, #b0b0b0)",
        img: todo,
        title: 'To Do Calendar',
        language: 'React && Firebase',
        description: 'Calendar optimization, CRUD functionailties for your schedules and to-do list.',
        addr: 'https://github.com/CS-411-To-Do-Calendar/cs411-to-do-calendar',
    },
    {
        color: "#3c3c3c",
        theme: "linear-gradient(to right, #e0e0e0, #ffffff)",
        img: pagerank,
        title: 'PageRank Algorithm',
        language: 'Python',
        description: 'PageRank is a method for ranking web pages based on their link structures, initially developed by Larry Page and Sergey Brin, the founders of Google.',
        addr: 'https://github.com/SPC-Toad/pagerank',
    },
    {
        color: "#6a1b9a",
        theme: "linear-gradient(to right, #e1bee7, #ce93d8)",
        img: katApp,
        title: 'KatApp',
        language: 'C# && React Native',
        description: 'Leveraging the power of AI, users can scan cat food barcodes, get product details, find Amazon best sellers, and maintain a record of past QR codes scanned.',
        addr: 'https://github.com/neezacoto/KatApp',
    },
    {
        color: "#263238",
        theme: "linear-gradient(to right, #b0bec5, #90a4ae)",
        img: unixFunction,
        title: 'Unix Function',
        language: 'C language',
        description: 'This project consists of tools for examining sections and symbols of object files. The tools implement functionalities similar to objdump -h and nm commands.',
        addr: 'https://github.com/SPC-Toad/unix-function-public',
    },
    {
        color: "#01579b",
        theme: "linear-gradient(to right, #b3e5fc, #81d4fa)",
        img: matrix3D,
        title: '3D Graphics Demo',
        language: 'Python',
        description: 'Visualize and interact with 3D shapes using Matplotlib in Python, featuring shape transformation and manipulation with sliders and radio buttons.',
        addr: 'https://github.com/SPC-Toad/3d_effect_matrix',
    },
    {
        color: "#1e88e5",
        theme: "linear-gradient(to right, #e3f2fd, #bbdefb)",
        img: rsa,
        title: 'RSA Cryptosystem',
        language: 'Python',
        description: 'Implemented RSA Encryption using Python. (Eulers Theorem version)',
        addr: 'https://github.com/SPC-Toad/rsa_encryption',
    },
    {
        color: "#bbdefb",
        theme: "linear-gradient(to right, #303f9f, #5c6bc0)",
        img: dna_seq,
        title: 'Sequence Alignment',
        language: 'Java',
        description: 'Implementing DNA sequence alignment using Dynamic Programming',
        addr: 'https://github.com/SPC-Toad/DNA_sequence_alignment',
    },
    {
        color: "#FFFFFF",
        theme: "linear-gradient(to right, #0d47a1, #26c6da)",
        img: aStar,
        title: 'Map Routing A* algorithm',
        language: 'Java',
        description: 'Implementing shortest route from start node to end node using A* version of dijkstra algorithm. (Greedy Algorithm)',
        addr: 'https://github.com/SPC-Toad/A--algorithm',
    },
    {
        color: "ffffff",
        theme: "linear-gradient(to right, #2c3e50, #95a5a6)",
        img: bacon,
        title: 'Bacon Number',
        language: 'Java',
        description: 'Finding the actors number of connections away from actor Kevin Bacon',
        addr: 'https://github.com/SPC-Toad/bacon_number',
    },
    {
        color: "#004d40",
        theme: "linear-gradient(to right, #4dd0e1, #80deea)",
        img: atomic,
        title: 'Atomic Nature of Matter',
        language: 'Python',
        description: 'Finding the particle(blob) using Depth First Search Algorithm',
        addr: 'https://github.com/SPC-Toad/atomic_nature_of_matter',
    },
    {
        color: "#5d4037",
        theme: "linear-gradient(to right, #ffecb3, #ffd54f)",
        img: BTS,
        title: 'Binary Tree Sort',
        language: 'C',
        description: 'Implemented Binary Tree with remove and sort function. Printing forward and reverse directions.',
        addr: 'https://github.com/SPC-Toad/binary_search_tree',
    },
    {
        color: "#FFFFFF",
        theme: "",
        img: dijkstra,
        title: 'Map Routing Dijkstra algorithm',
        language: 'Java',
        description: 'Implementing shortest route from start node to end node using dijkstra algorithm',
        addr: 'https://github.com/SPC-Toad/map-routing-dijkstra',
    },
    {
        color: "#01579b",
        theme: "linear-gradient(to right, #bbdefb, #90caf9)",
        img: MIS,
        title: 'Maximum Increasing Subsequence',
        language: 'Java',
        description: 'Finding the maximum increasing subsequence using dynamic programming',
        addr: 'https://github.com/SPC-Toad/movetofront',
    },
    {
        color: "#263238",
        theme: "linear-gradient(to right, #cfd8dc, #b0bec5)",
        img: BubbleSort,
        title: 'BubbleSort 2D',
        language: 'C',
        description: 'Implementing BubbleSort and for each word, count the repetition',
        addr: 'https://github.com/SPC-Toad/bubblesort_2D',
    },
    {
        color: "#263238",
        theme: "linear-gradient(to right, #b0bec5, #90a4ae)",
        img: IO,
        title: 'I/O Accessing',
        language: 'ASM C',
        description: 'This project demonstrates how to access and handle input and output operations using assembly language.',
        addr: 'https://github.com/SPC-Toad/accessing_IO',
    },
    {
        color: "#263238",
        theme: "linear-gradient(to right, #b0bec5, #90a4ae)",
        img: cmd,
        title: 'Console Functions',
        language: 'ASM C',
        description: 'This project implements terminal functions to interact with memory addresses and symbol tables in both SAPC and LINUX environments.',
        addr: 'https://github.com/SPC-Toad/console_functions',
    },
    {
        color: "#d84315",
        theme: "linear-gradient(to right, #ffcc80, #ffb74d)",
        img: gausElm,
        title: 'Gaussian Elimination',
        language: 'Python',
        description: 'This project is a Python3 implementation of a Gaussian Elimination calculator using NumPy.',
        addr: 'https://github.com/SPC-Toad/gaussian_elimination',
    },
    {
        color: "#d84315",
        theme: "linear-gradient(to right, #ffcc80, #ffb74d)",
        img: matrixOP,
        title: 'Matrix Operations',
        language: 'Python',
        description: 'This project implements various matrix operations in Python, including Gaussian elimination and other matrix manipulations.',
        addr: 'https://github.com/SPC-Toad/matrix_operations',
    },
    {
        color: "#388e3c",
        theme: "linear-gradient(to right, #81c784, #66bb6a)",
        img: vectorMul,
        title: 'Vector Multiplication',
        language: 'Python',
        description: 'This project provides a Python script for performing vector and matrix multiplication operations.',
        addr: 'https://github.com/SPC-Toad/vector_multiplication',
    },
];

export default CardData;