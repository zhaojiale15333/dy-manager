"use client"
import Link from 'next/link';
import {  useState } from 'react';
const HeaderMenu = () => {
    const [path, setPath] = useState<any>(window.location.pathname)    
    function activePath(event:any){
        const path=event.target.getAttribute('href')
        if(path){
            setPath(path)
        }else{
            setPath('/')
        }
    }
    return (
        <nav>
            <ul onClick={activePath}>
                <li>
                    <Link href="/" className={path === '/' ? 'active' : ''}>
                        <div>
                        首页
                        </div>
                        
                    </Link>
                </li>
                <li  >
                    <Link href="/manager" target="_blank" className={path === '/manager' ? 'active' : ''} passHref>
                        评委打分页面
                    </Link>
                </li>
                <li >
                    <Link href="/upload-info" target="_blank"  className={path === '/upload-info' ? 'active' : ''}>
                        导入选手信息页面
                    </Link>
                </li>

            </ul>
        </nav>
    );
};

export default HeaderMenu;
