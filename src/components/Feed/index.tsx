import { Container, Content, Post } from "./styles";
import { RiChat1Line } from 'react-icons/ri'
import { SiOverleaf } from 'react-icons/si'
import Link from "next/link";

import { PhotosData } from '../../data/photos'

export function Feed() {

    

    return (
        <Container>
            <h1>Feed</h1>
            <Content>

                {PhotosData.map(post => (
                    <Link href={`/post/${post.id}`} passHref key={post.id} >
                        <Post>
                            <img src={post.avatar_url} alt="" />

                            <footer>
                                <div className="engagement" >
                                    <div className="icon" >
                                        <SiOverleaf />
                                        <span>{post.id}k</span>
                                    </div>

                                    <div className="icon" >
                                        <RiChat1Line />
                                        <span>{post.id}00</span>
                                    </div>
                                </div>
                            </footer>
                        </Post>
                    </Link>
                ))}
            </Content>
        </Container>
    )
}