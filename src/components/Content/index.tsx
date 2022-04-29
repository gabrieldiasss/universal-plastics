import { BottomMenu } from "../../components/BottomMenu";
import Header from "../../components/Header";
import { Feed } from "../Feed";
import {Storys} from "../Storys";
import { Suggestions } from "../Suggestions";

import { Container } from "./styles";

export default function Content() {
    
    return (
        <Container>
            <Header />
            {/* <Storys /> */}
            {/* <Suggestions /> */}
            <Feed />
            <BottomMenu />
        </Container>
    )
}