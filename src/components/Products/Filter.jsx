// // import {FormControl, Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
// import { useState } from "react";
// import { FiArrowUp, FiRefreshCcw, FiSearch } from "react-icons/fi";
// import { FormControl, InputLabel, Select, MenuItem, Tooltip, Button } from '@mui/material';

// const Filter = () =>{
//   const categories =[
//     {categoryId:1,categoryName:"Electronics"},
//     {categoryId:2,categoryName:"Clothing"},
//     {categoryId:3,categoryName:"Furniture"},
//     {categoryId:4,categoryName:"Books"},
//     {categoryId:5,categoryName:"Toys"}
//   ]
//   const [category,setCategory] = useState("all");
//   const handleCategoryChange =(event) =>{
//     setCategory(event.target.value);
//   }
//   return(
//     <div className="flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center gap-4">
//       {/* Search bar */}
//       <div className="relative flex items-center 2xl:w-[450px] sm:w-[420px] w-full">
//         <input 
//             type="text"
//             placeholder="Search Products"
//             className="border border-gray-400 text-slate-600 rounded-md py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-[#1f2830]"
          
//             />
//           <FiSearch className="absolute left-3 text-slate-800 size={20}"/>
//       </div>
//       {/*Category Selection  */}
      
//       <div className="flex sm:flex-row flex-col gap-4 items-center">
//         <FormControl
//           className="text-slate-800 border-slate-700"
//           variant="outlined"
//           size="small"
//         >
//           <InputLabel id="category-select-label">Category</InputLabel>
//           <Select
//             labelId="category-select-label"
//             value={category}
//             onChange={handleCategoryChange}
//             label="category"
//             className="min-w-[120px] text-slate-600 border-slate-700"
//             >
//             <MenuItem value="all">All</MenuItem>
//             {categories.map((item) =>(
//               <MenuItem key = {item.categoryId} value={item.categoryName}>{item.categoryName}</MenuItem>
//             ))}
//           </Select>

//         </FormControl>
      
//       {/* Sort button & clear filter */}
//         <Tooltip title="Sort order">
//           <Button variant="contained" color="primary" className="flex items-center gap-2 h-10">
//             SORT BY
//             <FiArrowUp size={20}/>
//           </Button>
//         </Tooltip>
//         <button className="flex items-center gap-2 bg-rose-900 text-white px-3 py-2 rounded-md transition duration-300 ease-in shadow-md focus:outline-none">
//               <FiRefreshCcw className="font-semibold size-{12} "/>
//               <span>Clear Filter</span>
//         </button>
//       </div>
      
//     </div>
    
//   )
// }
// export default Filter;
// import {FormControl, Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { useEffect, useState } from "react";
import { FiArrowDown, FiArrowUp, FiRefreshCcw, FiSearch } from "react-icons/fi";
import { FormControl, InputLabel, Select, MenuItem, Tooltip, Button } from '@mui/material';
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const Filter = ({ categories }) =>{
  
 
  const [searchParams] = useSearchParams();
  const pathname = useLocation().pathname;
  const params = new URLSearchParams(searchParams);
  const navigate = useNavigate();

  const [category,setCategory] = useState("all");
  const [sortOrder,setSortOrder] = useState("asc");
  const [searchTerm,setSearchTerm] = useState("");

  useEffect(() => {
    const currentcategory = searchParams.get("category") || "all";
    const currentSortOrder = searchParams.get("sortBy") || "asc";
    const currentSearchTerm= searchParams.get("keyword") || "";
    setCategory(currentcategory);
    setSearchTerm(currentSearchTerm);
    setSortOrder(currentSortOrder);

  },[searchParams])

  const handleCategoryChange =(event) =>{
    const selectedCategory = event.target.value;
    if(selectedCategory === "all"){
      params.delete("category")
    }else{
      params.set("category",selectedCategory);
    }
    navigate(`${pathname}?${params}`)
  }
  const toggleSortOrder = () =>{
    setSortOrder((prevOrder) =>{
      const newOrder = (prevOrder === "asc") ? "desc" : "asc";
      params.set("sortBy",newOrder);
      navigate(`${pathname}?${params}`);
      return newOrder;
    })
  }
  const handleClearFilter = () =>{
    navigate({pathname : window.location.pathname});
  }
  useEffect(() =>{
    const handler = setTimeout(() =>{
      if(searchTerm){
        searchParams.set("keyword",searchTerm)
      }else{
        searchParams.delete("keyword");
      }
      navigate(`${pathname}?${searchParams.toString()}`)
    },700);
    return () =>{
      clearTimeout(handler);
    }
  },[searchParams,searchTerm,navigate,pathname])
  return(
    <div className="flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center gap-4">
      {/* Search bar */}
      <div className="relative flex items-center 2xl:w-[450px] sm:w-[420px] w-full">
        <input 
            type="text"
            placeholder="Search Products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-400 text-slate-600 rounded-md py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-[#1f2830]"
            
          
            />
          <FiSearch className="absolute left-3 text-slate-800 " size={20}/>
      </div>
      {/*Category Selection  */}
      
      <div className="flex sm:flex-row flex-col gap-4 items-center">
        <FormControl
          className="text-slate-800 border-slate-700"
          variant="outlined"
          size="small"
        >
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            value={category}
            onChange={handleCategoryChange}
            label="category"
            className="min-w-[120px] text-slate-600 border-slate-700"
            >
            <MenuItem value="all">All</MenuItem>
            {categories.map((item) =>(
              <MenuItem key = {item.categoryId} value={item.categoryName}>{item.categoryName}</MenuItem>
            ))}
          </Select>

        </FormControl>
      
      {/* Sort button & clear filter */}
        <Tooltip title="Sort order">
          <Button 
          onClick={toggleSortOrder}
          variant="contained" 
          color="primary" 
          className="flex items-center gap-2 h-10"
          >
            SORT BY
            {sortOrder === "asc" ? (
              <FiArrowUp size={20}/>
            ):
            (
              <FiArrowDown size={20}/>
            )}
            
          </Button>
        </Tooltip>
        <button className="flex items-center gap-2 bg-rose-900 text-white px-3 py-2 rounded-md transition duration-300 ease-in shadow-md focus:outline-none"
        onClick={handleClearFilter}>
              <FiRefreshCcw className="font-semibold size-{12} "/>
              <span>Clear Filter</span>
        </button>
      </div>
      
    </div>
    
  )
}
export default Filter;
