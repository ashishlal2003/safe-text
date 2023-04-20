const express = require('express');

const getHome = (req,res,next)=>{
    console.log("Home page");
    res.json({message: "Home page"});
    next();
};

module.exports = {
    getHome
};