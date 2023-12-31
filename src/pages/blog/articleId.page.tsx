import MarkdownEditor from '@uiw/react-markdown-editor'
import Article from '../../components/blog/Article'
import { useEffect, useState } from 'react';
import ScrollSpy from '../../components/blog/ScrollSpy';
import { MD_DATA } from "./data";
import { Link } from 'react-router-dom';


export type ElementsType = {
  id: string;
  tag: string;
  text: string;
}

export type IdsType = {
  id: string;
  tag: string;
  text: string;  
}

function BlogIdPage() {
  const [elements, setElements] = useState<ElementsType[]>([])
  const [ids, setIds] = useState<IdsType[]>([])

  const getIdsFromElements = (elements: ElementsType[]): IdsType[] => {
    const newElements:IdsType[] = []
    elements.forEach((e:any) => {
      newElements.push(e.id)
    })
    return newElements
  }

  useEffect(() => {
    let element = document.querySelector('#article .wmde-markdown')
    let newElements: ElementsType[] = []
    if (element?.children.length && element?.children.length > 0) {
      Array.from(element?.children).forEach((e: Element) => {
        if (e.tagName[0] === 'H') {
          // @ts-ignore
          newElements.push({id: e.id, tag: e.tagName, text: e.textContent})
        }
      })
    }
    setElements([...newElements])
    setIds(getIdsFromElements(newElements))
  }, [])
  
  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto my-10 gap-4 relative" id="article">
      <div className="md:w-3/4 space-y-5">
        <div className='flex flex-col items-start md:flex-row justify-between md:items-center'>
          <h1 className="text-3xl">Lorem ipsum dolor sit amet</h1>
          <Link to={`/articles/edit/${4}`} className='btn btn-ghost'>Edit  this article<i className="bi bi-pen"></i></Link>
        </div>
        <img src="/img.jpg" className="w-full rounded-box" alt="hello" />
        <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum harum sed facilis voluptatum fugiat est.</p>
        <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-x-1 [&>li>i]:text-base-content/80 flex gap-x-4 text-base-content border-y border-base-content/10 py-4">
          <li>
            <i className='bi bi-calendar-check'></i>
            <span>10-12-2022</span>
          </li>
          <li>
            <i className='bi bi-person-fill'></i>
            <Link to={'/profile/1'}>Ahmed</Link>
          </li>
        </ul>
        <MarkdownEditor.Markdown className='ps-1 pe-4' source={MD_DATA} />
        <div className="border-t border-base-content/10 pt-4 space-y-5">
          <div className="join flex justify-between w-full">
            <Link to={'/articles/14'} className="join-item btn btn-outline">
              <i className="bi bi-chevron-compact-left rtl:rotate-180"></i>
              <span>Previous article</span>
            </Link>
            <Link to={'/articles/15'} className="join-item btn btn-outline">
              <span>Next article </span>
              <i className="bi bi-chevron-compact-right rtl:rotate-180"></i>
            </Link>
          </div>
          <h2 className="section-title"><span>Similar Articles</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Article e={45312}/>
          <Article e={945}/>
          <Article e={485}/>
          <Article e={458}/>
          <Article e={458}/>
          <Article e={445}/>
        </div>
      </div>
      </div>
      <ScrollSpy ids={ids} elements={elements}/>
    </div>
  )
}

export default BlogIdPage