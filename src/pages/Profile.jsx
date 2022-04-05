import React from 'react';
import styled from "styled-components";
import menu from "../assets/Menu.svg";
import privateIcon from "../assets/Private Icon.svg";
import shortcut from "../assets/shortcut.svg";
import user from "../assets/user.png";
import friends from "../assets/Friends.png";
import sport from "../assets/Sports.png";
import design from "../assets/Design.png";
import plus from "../assets/plusStory.png";


const Profile = () => {
    return (
        <Wrapper>
            <div className='header'>
                <img src={privateIcon} alt="" />
                <span>jacob_w</span>
                <img src={shortcut} alt="" />

                <div className='menu'>
                    <img src={menu} alt="" />
                </div>
            </div>

            <div className='user__container'>
                <img className='user__image' src={user} alt="" />

                <div className='posts'>
                    <p>54</p>
                    <span>Posts</span>
                </div>
                <div className='followers'>
                    <p>834</p>
                    <span>Followers</span>
                </div>
                <div className='following'>
                    <p>162</p>
                    <span>Following</span>
                </div>
            </div>

            <div className='user__container-text'>
                <p className='username'>Jacob West</p>
                <p>Digital goodies designer <a href="#">@pixsellz</a></p>
                <p>Everything is designed.</p>
            </div>

            <div className='edit__input'>
                <input type="text"  placeholder='edit profile'/>
            </div>

            <div className='saved__stories'>
                <div className='new'>
                    <img src={plus} alt="" />
                    <p>New</p>
                </div>
                <div>
                    <img src={friends} alt="" />
                    <p>Friends</p>
                </div>
                <div>
                    <img src={sport} alt="" />
                    <p>Sports</p>
                </div>
                <div>
                    <img src={design} alt="" />
                    <p>Design</p>
                </div>
            </div>
        </Wrapper>
    );
}

export default Profile;

const Wrapper = styled.div`
    background: white;

    .header{
        position: relative;
        display: flex;
        justify-content: center;
        gap: 5px;
        padding: 56px 18px 10px 0;

        .menu{
            position: absolute;
            top: 56px;
            right: 12px;
        }
    }

    .user__container{
        display: flex;
        gap: 20px;
        padding: 0px 0px 11px 11px;
        align-items: center;

        .user__image{
            border-radius: 50%;
            padding: 3px;
            border: 2px solid #C7C7CC;
        }

        .posts,
        .followers,
        .following{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-right: 20px;

            span{
                font-weight: 400;
                font-size: 13px;
                line-height: 16px;
                text-align: center;
                letter-spacing: -0.1px;
                color: #262626;
            }
        }
    }

    .user__container-text{
        padding-left: 16px;

        .username{
            font-weight: 600;
            line-height: 14px;
        }

        p{
            font-weight: 400;
            font-size: 12px;
            line-height: 17px;
            color: #262626;
            margin-bottom: 3px;

            a{
                text-decoration: none;
            }
        }
    }

    .edit__input{
        padding: 16px;

        input{
            width: 100%;
            text-align: center;
            padding: 6px;
            background: #FFFFFF;
            border: 1px solid rgba(60, 60, 67, 0.18);
            outline: none;
            border-radius: 6px;
            font-weight: 600;
            font-size: 13px;
            line-height: 18px;
            color: #262626;
        }
    }

    .saved__stories{
        display: flex;
        gap: 18px;
        padding-left: 14px;
        border-bottom: 1px solid #706e6e;

        img{
            border-radius: 50%;
            border: 1px solid #C7C7CC;
            padding: 3px;
        }
        p{
            text-align: center;
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
            letter-spacing: -0.01px;
            color: #262626;
            margin-bottom: 15px;
        }

        .new{
            img{
                padding: 21px;
            }
        }
    }
`;