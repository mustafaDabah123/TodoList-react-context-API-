import styled from 'styled-components';

export const AppContainer  = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`
export const AppHeader = styled.h1 `
    color: #fff;
    font-size: 60px;
    margin-bottom: 30px;
    text-align: center;
` 
export const FromContainer = styled.form `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
` 
export const ListList = styled.ul `
    padding:0px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
` 
export const ItemsList  = styled.li `
    padding: 20px;
    font-size: 20px;
    text-transform: capitalize; 
    background-color: #fff;
    border-radius: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
` 
export const ButtonDelete = styled.button `
    padding: 5px 20px;
    background: rgb(122,197,245);
    background: linear-gradient(90deg, rgba(122,197,245,1) 0%, rgba(0,65,255,1) 100%);    
    color: aliceblue;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`