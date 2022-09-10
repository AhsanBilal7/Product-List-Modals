import React from 'react'
import './CardComp.css'
import { GiCrossedBones } from 'react-icons/gi';
import { useParams } from 'react-router-dom';
import { chairs,shoes,tables } from '../../Information/Information';
import { useEffect } from 'react';
// import imgShoes from '../../pictures/1.jpg'


const{useState}=React;
function ProfileCard(){
    const {id} = useParams();
    
    const {arrayName} = useParams();

    console.log(arrayName)
    console.log(id)
    const [showArray , setShowArray] = useState(chairs)
    useEffect(()=>{
        if (arrayName == "Chairs"){setShowArray(chairs)}
        else   if (arrayName == "Tables"){setShowArray(tables)}
        else  if (arrayName == "Shoes"){setShowArray(shoes)}
    },[arrayName])
    
    

        const {imgSource,productName , productValue , productDescription} =showArray[id]
    console.log(showArray[id])
    



    // const setModalFlag = props.setModalFlag
    const [isActive,setIsActive] = useState(false)
    const addClass = (event) =>{
        setIsActive(!isActive)
    }
    const[addbag,setaddbag]=useState(1);
    const[heart,setheart]=useState(1);
    
    const AddBag=()=>{
    if(addbag<10){ setaddbag(addbag+1); } }; const DecBag=()=>{
        if(addbag>=1){
        setaddbag(addbag-1);
    
        }
        };
        const Heart=()=>{
        // if(heart){
        // setheart(0);
        // }else{
        // setheart(1);
        // }
        // setModalFlag(false)
        }
    
        return(
        <>
            <div className="container">
                <div className="card">
                    <div className="top_part">
                        <div className="circle">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            
                        </div>
                       <a href="/main"> <small><i className={`fa ${heart ? "fa-heart-o" : "fa-heart" }`}><GiCrossedBones /></i></small></a>
                    </div>
                    <div className="image">
                        <img src= {imgSource} />
                    </div>
                    <div className="vitamin">
                        <h3>{productName}</h3>
                        <div className="rating">
                            <input type="radio" name="rating" value="5" id="5" />
                            <label htmlFor="5">☆</label>
                            <input type="radio" name="rating" value="4" id="4" />
                            <label htmlFor="4">☆</label>
                            <input type="radio" name="rating" value="3" id="3" />
                            <label htmlFor="3">☆</label>
                            <input type="radio" name="rating" value="2" id="2" />
                            <label htmlFor="2">☆</label>
                            <input type="radio" name="rating" value="1" id="1" />
                            <label htmlFor="1">☆</label>
                        </div>
                    </div>
                    <div className="reviews">
                        <p>{productDescription}</p>
                        <u>144 Views</u>
                    </div>
                    <div className="size">
                        {/* <p>with Hyaluronic acid and Vitamin E</p> */}
                        <h5>Size : 1 FL Oz</h5>
                    </div>
                    <div className="buttons">
                        <button className={isActive ? '' : 'btnActive'} onClick={addClass}>1 FL Oz<p>1 option from $23</p></button>
                        <button className={isActive ? 'btnActive' : ''} onClick={addClass}>2 FL Oz<p>$43($21/FL Oz)</p></button>
                    </div>
                    <h4>Select Gender</h4>
                    <div className="gender">
                        <span>Man</span>
                        <span>Woman</span>
                        <span>Both</span>
                    </div>
                    <div className="last_buttons">
                        <div className="qty_btn">
                            <i onClick={DecBag} className="fa fa-minus"><b>-</b></i>
                            <p>{addbag}</p>
                            <i onClick={AddBag} className="fa fa-plus"><b>+</b></i>
                        </div>
                        <div className="money_bag">
                            <h3>{productValue}</h3>
                            <button onClick={AddBag}><i className="fa fa-shopping-bag"></i>Add to bag</button>
                        </div>
    
                    </div>
                </div>
            </div>
    
    
        </>
        );
        }
    
    

    export default ProfileCard