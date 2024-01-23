'use client';
import { useState } from "react";

interface  SelectionButtonProps {
    option: string;
}

export default function SelectionButton({option}: SelectionButtonProps){
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    return (     <div 
                    onClick={handleClick}
                    className={`flex justify-center items-center ${isClicked? 'border border-solid rounded-lg border-primary bg-primary':'border border-solid border-black rounded-lg'} `}>
                    <p className="p-2">{option}</p>
                </div>
    )
}