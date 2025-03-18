import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import root from "../../../public/filesFolderData.json"
import FolderRenderer from './FolderRenderer';

// const openedFolders = new Set();


function WorkSpace2() {
  const userName = useSelector(state => state.userData.user);
  // Create state for the HashSet
    const [hashSet, setHashSet] = useState(new Set());

    // Function to add an item to the HashSet
    const addToHashSet = (item) => {
        setHashSet((prevSet) => {
            const newSet = new Set(prevSet); // Create a new Set from the previous state
            newSet.add(item); // Add the item
            return newSet; // Return the new Set
        });
    };

    // Function to remove an item from the HashSet
    const removeFromHashSet = (item) => {
        setHashSet((prevSet) => {
            const newSet = new Set(prevSet); // Create a new Set from the previous state
            newSet.delete(item); // Remove the item
            return newSet; // Return the new Set
        });
    };

  return (
    <div>
        <div className=' flex flex-col items-center'>
            <h1 className='mb-4'>Hi {userName}! You are welcomed to Workspace2.</h1>
            <h1 className=' text-2xl font-bold'>File/folder structure.</h1>
            <div className=' bg-gray-800 p-4 rounded-2xl w-1/3'>
              < FolderRenderer folder={root} isChild={false} leftPos={0} openedFolders={hashSet} addToHashSet={addToHashSet} removeFromHashSet={removeFromHashSet} />
            </div>
        </div>
    </div>
  )
}

export default WorkSpace2