import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Pleloader/Preloader/Preloaer";
import ProfileWithStatusHook from "./ProfileWithStatusHook";

const ProfileInfo = ({profile , status , updateStatus}) => {
   if(!profile){
    return <Preloader/>
   }
    return (
        <div>
            <div>
              <img className={s.imgg} src='https://s1.1zoom.ru/big3/984/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_3840x2400.jpg' alt={'gg'} />
           </div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} alt={"img"}/>
                Ava + discription
                <ProfileWithStatusHook status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
}

export default ProfileInfo


 