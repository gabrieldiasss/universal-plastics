import { Container, Content, Post } from "./styles";
import { RiChat1Line } from 'react-icons/ri'
import { SiOverleaf } from 'react-icons/si'
import Link from "next/link";

import { PhotosData } from '../../data/photos'
import { useState } from "react";

export function Feed() {

    const [like, setLike] = useState<Record<number, boolean>>({})
    const [comments, setComments] = useState<Record<number, boolean>>({})

    function handleLike(id: number) {
        setLike({ ...like, [id]: !like[id] })
    }

    function handleComment(id: number) {
        setComments({ ...comments, [id]: !comments[id] })
    }

    return (
        <Container>
            <h1>Feed</h1>
            <Content>

                {PhotosData.map(post => (
                    <Post key={post.id} >
                        <Link href={`/post/${post.id}`} passHref>
                            <img src={post.avatar_url} alt="" />
                        </Link>

                        <footer>
                            <div className="engagement" >
                                <div className="icon">

                                    {!like[post.id] ? (
                                        <SiOverleaf onClick={() => handleLike(post.id)} />
                                    ) : (
                                        <SiOverleaf className="like" onClick={() => handleLike(post.id)} />
                                    )}

                                    <span>{post.id}k</span>
                                </div>

                                <div className="icon" >
                                    {!comments[post.id] ? (
                                        <RiChat1Line onClick={() => handleComment(post.id)} />
                                        
                                    ) : (
                                        <RiChat1Line className="like" onClick={() => handleComment(post.id)} />
                                    )}

                                    <span>{post.id}00</span>
                                </div>
                            </div>
                        </footer>
                    </Post>
                ))}
            </Content>
        </Container>
    )
}