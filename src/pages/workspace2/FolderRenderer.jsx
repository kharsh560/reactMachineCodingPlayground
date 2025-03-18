import React from 'react'
import { Folder, Plus, Minus, File } from 'lucide-react';
import { easeIn, motion } from "framer-motion";


function FolderRenderer({ folder, isChild, leftPos, openedFolders, addToHashSet, removeFromHashSet }) {
    // console.log(leftPos);
    const handleFolderClick = (folderTitle) => {
        // console.log(openedFolders?.has(folderTitle));
        if (openedFolders?.has(folderTitle)) {
            removeFromHashSet(folderTitle);
        }
        else {
            addToHashSet(folderTitle);
        }
    }

    if (folder?.length == 0) {
        return <div className=' flex'>
             <div style={{position: "relative", left: `${leftPos}rem`}} className='p-1'>~</div>
        </div>   
    }
    else {
        return (
          <div className=' text-amber-50  '>
            {folder.map((item) => {
                return (
                    <div> 
                        {item.isFolder ? (
                            <div> 
                                <button onClick={() => handleFolderClick(item.title)} style={{position: "relative", left: `${leftPos}rem`}}  className=' flex items-center gap-1 rounded-xl m-1 border-2 border-solid border-amber-50 cursor-pointer p-1'> 
                                    <Folder size={20} /> {item.title} | {item?.content?.length} 
                                    <motion.div
                                        key={openedFolders?.has(item.title)} // Ensures smooth transition
                                        initial={{ scale: 0.6, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0.6, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        {openedFolders?.has(item.title) ? (
                                        <Minus size={16} />
                                        ) : (
                                        <Plus size={16} />
                                        )}
                                    </motion.div> 
                                </button>
                                {/* <div className={openedFolders?.has(item.title) ? 'block' : 'hidden'} ><FolderRenderer folder={item.content} isChild={true} openedFolders={openedFolders} leftPos={leftPos+2} addToHashSet={addToHashSet} removeFromHashSet={removeFromHashSet} /></div> */}
                                <motion.div initial={{height: 0, opacity: 0}} animate={openedFolders?.has(item.title) ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }} transition={{duration: 0.3, ease: easeIn}} style={{overflow: 'hidden'}}>
                                    <FolderRenderer folder={item.content} isChild={true} openedFolders={openedFolders} leftPos={leftPos+2} addToHashSet={addToHashSet} removeFromHashSet={removeFromHashSet} />
                                </motion.div>
                            </div>
                            
                        ) : (
                            <div>
                                <div style={{position: "relative", left: `${leftPos}rem`}} className='p-1 flex items-center gap-1'> <File size={20} /> <h1>{item.title}</h1></div>
                            </div>
                        )} 
                    </div>
            )
            })}
          </div>
        )
    }
}

export default FolderRenderer