import React, {Component} from 'react';
import styled from 'styled-components';

class Chat extends Component {
    constructor(){
        super()
        this.state={
            
        }
    }

    render(){
        return(
            <ChatBody>
                <ChatHeading>
                    <NameDot>
                        <Name>Ginny Weasley</Name>
                        <Dot></Dot>
                        {/* <span>unavailable</span> */}
                    </NameDot>
                    <IconHolder>
                        <Icons className="fas fa-folder"></Icons>
                        <Icons className="fas fa-phone"></Icons>
                        <Icons className="fas fa-video"></Icons>
                    </IconHolder>
                </ChatHeading>

                <Chats>
                    <p>Chat history from DB</p>
                </Chats>
                <FormHolder>
                    <Form>
                        <Textarea placeholder='Send Message...'/>
                        <ButtonsHolder>
                            <TopButtons>
                                <Buttons>
                                    <Icons className="fas fa-images"></Icons>
                                </Buttons>
                                <Buttons>
                                    <Icons className="far fa-smile-wink"></Icons>
                                </Buttons>
                            </TopButtons>
                            <Send>
                                <Icons className="far fa-paper-plane"></Icons>
                            </Send>
                        </ButtonsHolder>
                    </Form>
                </FormHolder>
            </ChatBody>
        )
    }
}

export default Chat


//////////////////////////////////////////////STYLING COMPONENTS BELOW///////////////////////////////////////////








const ChatBody = styled.div`
    width:45vw;
    height:97vh;
    display:flex;
    flex-direction:column;
    margin-top:1.5vh;
    margin-bottom:1.5vh;
    @media screen and (max-width:1370px){
        min-width:700px;
        border-radius:0 10px 10px 0;
    }

    @media screen and (max-width:1025px){
        min-width:97vw;
        max-width:97vw;
        height:97vh;
    }

    @media screen and (max-width:415px){
        min-width:97vw;
        max-width:97vw;
        height:97vh;
    }

    @media screen and (max-width:376px){
        min-width:97vw;
        max-width:97vw;
        height:97vh;
    }
    
`
const ChatHeading = styled.div`
    display:flex;
    align-items:center;
    background:lightgrey;
    height:10%;
    border-bottom:darkgrey solid 0.05px;
    width:100%;
    justify-content:space-between;
    @media screen and (max-width:1370px){
        border-radius:0 10px 0 0;
    }
    @media screen and (max-width:1025px){
        border-radius:10px 10px 0 0;
        width:100%;
    }
`

const NameDot = styled.div`
    display:flex;
    align-items:center;
`
const Dot = styled.div`
    margin-left:10px;
    margin-right:10px;
    height:10px;
    width:10px;
    background:red;
    border-radius:50%;
`
const IconHolder = styled.div`
    display:flex;
    width:30%;
    height:98%;
    align-items:center;
    justify-content:space-evenly;
`

const Icons = styled.i`
    font-size:25px;
    color:#363E47
`

const Chats = styled.div`
    display:flex;
    align-items:center;
    background:lightgrey;
    height:75%;
    max-height:75%;
    width:100%;
`

const FormHolder = styled.div`
    display:flex;
    align-items:center;
    height:15%;
    width:100%
`
const Form = styled.form`
    display:flex;
    width:100%;
    height:100%
`

const Textarea = styled.textarea`
    max-width:75%;
    min-width:75%;
    min-height:97%;
    max-height:97%;
    font-size:20px;
    @media screen and (max-width:1025px){
        border-radius:0 0 0 10px;
    }
`

const ButtonsHolder = styled.div`
    display:flex;
    flex-direction:column;
    width:25%;
`

const TopButtons = styled.div`
    width:100%;
    height:50%;
`

const Buttons = styled.button`
    height:100%;
    width:50%;
    background:white;
    border: solid lightgrey 1px;
`
const Send = styled.button`
    height:50%;
    background:forestgreen;
    outline-color:lightgreen;
    @media screen and (max-width:1370px){
        border-radius:0 0 10px 0;

    }
`

const Name = styled.h1`
    font-size:55px;
    @media screen and (max-width:769px){
        font-size:50px;
    }
    @media screen and (max-width:600px){
        font-size:30px;
    }
    @media screen and (max-width:500px){
        font-size:25px;
    }
    @media screen and (max-width:376px){
        font-size:20px;
    } 
`