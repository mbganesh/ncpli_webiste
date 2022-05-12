import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/HighlightOff";
import axios from "axios";
import CloseIcon from '@mui/icons-material/Close';
import { styled } from "@mui/system";

const MainDiv = styled("div")(({ theme }) => ({
  width: "95%",
  display: "flex",
  flexWrap: "wrap",
  minHeight: "30px",
  border: "1px solid gray",
  borderRadius: "5px",
  backgroundColor: "#404040",
  padding: "10px",
  margin: "10px",
}));

const SubDiv = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "5px",
  border: "1px solid gray",
  borderRadius: "5px",
  height: "25px",
  backgroundColor: "#737373",
  margin: "2px 5px 2px 0px",
  color: "white",
}));

const Input = styled("input")(({ theme }) => ({
  border: "none",
  flex: 1,
  outline: "none",
  padding: 5,
  background: "#404040",
  color: "white",
}));

const RemoveBtn = (theme) => ({
  width: "25px",
  height: "25px",
  padding: "10px",
  cursor: "pointer",
  color: "#fff",
});

export default function CareerModifier() {

  const [addBtn , setAddBtn] = useState(false)

  const [allData , setAllData] = useState([])

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState([]);
  const [skills, setSkills] = useState([]);
  const [eligibility, setEligibility] = useState([]);
  const [cardData, setCardData] = useState([]);

  const addDescription = (e) => {
    if (e.key === "Enter") {
      if (e.target.value.length > 0) {
        setDescription([...description, e.target.value]);
        e.target.value = "";
      }
    }
  };

  const addSkills = (e) => {
    if (e.key === "Enter") {
      if (e.target.value.length > 0) {
        setSkills([...skills, e.target.value]);
        e.target.value = "";
      }
    }
  };

  const addEligibility = (e) => {
    if (e.key === "Enter") {
      if (e.target.value.length > 0) {
        setEligibility([...eligibility, e.target.value]);
        e.target.value = "";
      }
    }
  };

  const addCardData = (e) => {
    if (e.key === "Enter") {
      if (e.target.value.length > 0) {
        setCardData([...cardData, e.target.value]);
        e.target.value = "";
      }
    }
  };

  const handleAddSubmit = () => {
    let newData = {
      details: {
        title: title,
        description: description,
        skills: skills,
        eligibility: eligibility,
      },
      cardData: cardData,
    };


    if(title!='' && description.length != 0 && skills.length!=0 && eligibility.length !=0){
      console.log('all full');
    }else{
      console.log('all empty');
    }

    // axios.post("http://192.168.1.31:9999/api/addData", newData).then((res) => {
    //   console.log(res.data);
    // });


    // reset to filled data set
    setTitle('')
    setDescription([])
    setSkills([])
    setEligibility([])
    setCardData([])



    console.log(newData);
  };

  const removeDescription = (text) => {
    const newData = description.filter((myText) => myText !== text);
    setDescription(newData);
  };

  const removeSkills = (text) => {
    const newData = skills.filter((myText) => myText !== text);
    setSkills(newData);
  };

  const removeEligibility = (text) => {
    const newData = eligibility.filter((myText) => myText !== text);
    setEligibility(newData);
  };

  const removeCardData = (text) => {
    const newData = cardData.filter((myText) => myText !== text);
    setCardData(newData);
  };


  const showItems = () => {
    axios.get('http://192.168.1.31:9999/api/getData').then(res => {
      setAllData(res.data.data)
    })
  }


  const HandleDelete = (id) => {
    const DeleteItem = {
      "id":id
    }
    axios.post('http://192.168.1.31:9999/api/deleteData',DeleteItem).then(res => {
      showItems()
    })
  }

  useEffect(()=>{
    showItems()

    window.addEventListener('online' , (e) =>{
      alert('you are online')
    })

    window.addEventListener('offline' , (e) =>{
      alert('you are offline')
    })

    /**
     * i dont fucking care...
     */

    // if(navigator.onLine){
    //   console.log('online');
    // }else{
    //   console.log('offline');
    // }


  },[])

  return (
    <div   style={{
      display: "flex",
      justifyContent: "center",
      flexDirection:'column',
      alignItems:'center'
    }} 
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          backgroundColor: "#404040",
        }}
      >
        <Button startIcon={<AddIcon />} onClick={()=>setAddBtn(!addBtn)} sx={{margin:'10px'}} variant="contained" color="success">
          {" "}
          Add{" "}
        </Button>


      </div>

      {/* Add Data UI -- Root*/}
      <div
        style={{
          display: addBtn?"flex":"none",
          width: "50vw",
          backgroundColor: "#404040",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
          flexDirection: "column",
          borderRadius:'10px',
          marginTop: "25px",
        }}
      >
      <div style={{display:'flex',width:'96%', padding:'2%' ,  backgroundColor:'#000'}}>
      <Typography
          sx={{ textAlign: "center", width: "100%", color: "white" , flex:1 }}
          variant="h5"
        >
          {" "}
          Add Career Data{" "}
        </Typography>

        <CloseIcon onClick={()=>setAddBtn(!addBtn)} sx={{ width:'30px' , height:'30px' , borderRadius:'50%' ,cursor:'pointer' , backgroundColor:'#bfbfbf'}}/>
      </div>

        {/* title */}

        <div style={{ width: "100%", color: "white" }}>
          <Typography variant="subtitle1" style={{margin: "5px 10px"}}> Title</Typography>
          <MainDiv>
            <Input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </MainDiv>
        </div>

        {/* description */}
        <div style={{ width: "100%", color: "white" }}>
          <Typography variant="subtitle1" style={{margin: "5px 10px"}}> Description</Typography>
          <MainDiv>
            {description.map((text, index) => (
              <SubDiv key={index}>
                {text}
                <RemoveIcon
                  onClick={() => removeDescription(text)}
                  sx={RemoveBtn}
                />
              </SubDiv>
            ))}
            <Input onKeyDown={addDescription} />
          </MainDiv>
        </div>

        {/* skills */}
        <div style={{ width: "100%", color: "white" }}>
          <Typography variant="subtitle1" style={{margin: "5px 10px"}}> Skills</Typography>
          <MainDiv>
            {skills.map((text, index) => (
              <SubDiv key={index}>
                {text}{" "}
                <RemoveIcon onClick={() => removeSkills(text)} sx={RemoveBtn} />{" "}
              </SubDiv>
            ))}
            <Input onKeyDown={addSkills} />
          </MainDiv>
        </div>
        {/* eligibility */}

        <div style={{ width: "100%", color: "white" }}>
          <Typography variant="subtitle1" style={{margin: "5px 10px"}}> Eligibility</Typography>
          <MainDiv>
            {eligibility.map((text, index) => (
              <SubDiv key={index}>
                {text}{" "}
                <RemoveIcon
                  onClick={() => removeEligibility(text)}
                  sx={RemoveBtn}
                />
              </SubDiv>
            ))}
            <Input onKeyDown={addEligibility} />
          </MainDiv>
        </div>
        {/* cardData */}

        <div style={{ width: "100%", color: "white" }}>
          <Typography variant="subtitle1" style={{margin: "5px 10px"}}> Card Data</Typography>
          <MainDiv>
            {cardData.map((text, index) => (
              <SubDiv key={index}>
                {text}{" "}
                <RemoveIcon
                  onClick={() => removeCardData(text)}
                  sx={RemoveBtn}
                />
              </SubDiv>
            ))}
            <Input onKeyDown={addCardData} />
          </MainDiv>
        </div>
        {/* submit -- btn */}

        <Button
          onClick={() => handleAddSubmit()}
          variant="contained"
          color="info"
          fullWidth
        >
          Add Data
        </Button>
      </div>

{/* Delete Data UI -- Root  */}
<div
        style={{
          display: "flex",
          width: "50vw",
          backgroundColor: "#404040",
          flexDirection: "column",
          // padding: "10px",
          borderRadius:'10px',
          marginTop: "25px",
        }}
      >

        <Typography style={{textAlign:'center' , color:'#fff' , padding:'5px'}} variant="h5"> Career List </Typography>
                {
                  allData.map((obj , index) => (
                    <div key={index} style={{display:'flex' , justifyContent:'space-between' , padding:'10px' , margin:'10px' , backgroundColor:'#8c8c8c' , color:'#fff'}}>
                        <Typography> {obj.details.title} </Typography>
                        <DeleteIcon onClick={()=>HandleDelete(obj._id)} sx={{color:'#F32424' , cursor:'pointer'}} />
                    </div>
                  ))
                }
              </div>
            


     
    </div>
  );
}
