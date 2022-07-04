import { EmailOutlined, Facebook, Instagram, Phone, Pinterest, Room, YouTube } from "@material-ui/icons";
import styled from "styled-components"
import { mobile } from "../responstive";

const Constainer = styled.div`
    display: flex;
    ${mobile({ flexDirection:"column" })}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px; 
`;
const Logo = styled.h1`

`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${prop => prop.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display:"none" })}
`;
const Title = styled.h3`
    margin-bottom: 30px;
`;
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor:"#eee" })}
`;
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;
const Paymet = styled.img`
    width: 50%; 
`;
const Footer = () => {
    return (
        <Constainer>
            <Left>
                <Logo>LOGO.</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nesciunt deserunt recusandae quas asperiores distinctio commodi exercitationem ipsa, quos deleniti. Autem nisi repellendus suscipit corrupti ipsa officia esse maxime eveniet.</Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="BC2A8D">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="bd081c">
                        <Pinterest />
                    </SocialIcon>
                    <SocialIcon color="ff0000">
                        <YouTube />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>
                    Useful Linlks
                </Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accsessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>WishList</ListItem>
                    <ListItem>WishList</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>
                    Contact
                </Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/> Tan Phu District, Ho Chi Minh City
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/> +84337387174
                </ContactItem>
                <ContactItem>
                   <EmailOutlined style={{marginRight:"10px"}} /> trngnguyenfeb26@gmail.com
                </ContactItem>
                <Paymet src="https://i.ibb.co/SdcQvCx/payment-icons.png"/>
            </Right>
        </Constainer>
    )
}

export default Footer