"use client";

import React, {useState} from "react";
import {CardAuthor} from "@/components/Card.Author";
import {CardShare} from "@/components/Card.Share";

export const CardFooter = () => {
    const [isShareOpen, setIsShareOpen] = useState(false);

    function handleShareClick() {
        setIsShareOpen(!isShareOpen);
    }

    return isShareOpen
        ? <CardShare toggleContent={handleShareClick}/>
        : <CardAuthor toggleContent={handleShareClick}/>;
}