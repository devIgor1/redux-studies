import { FC, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addLanguages, favLanguage, useLanguages } from "./redux/sliceLanguages"
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md"

interface AppProps {}

const App: FC<AppProps> = ({}) => {
  const languages = useSelector(useLanguages)

  const [newLanguage, setNewLanguage] = useState<string>("")

  const dispath = useDispatch()

  return (
    <div className="h-screen w-full flex items-center justify-center flex-col">
      <ul className="list-disc mb-5">
        {languages.map((language) => {
          return (
            <div className="flex items-center ">
              <span>{language.name}</span>
              <button
                className="ml-4"
                type="button"
                onClick={() => dispath(favLanguage(language.name))}
              >
                {language.favorite ? (
                  <MdFavorite style={{ color: "#7FFF00" }} />
                ) : (
                  <MdOutlineFavoriteBorder style={{ color: "#7FFF00" }} />
                )}
              </button>
            </div>
          )
        })}
      </ul>
      <div className="border-2 rounded">
        <input
          type="text"
          className="outline-none p-2"
          value={newLanguage}
          onChange={(e) => setNewLanguage(e.target.value)}
        />
        <button
          type="button"
          className=" bg-slate-500 p-2 hover:bg-slate-400"
          onClick={() => dispath(addLanguages(newLanguage))}
        >
          Add
        </button>
      </div>
    </div>
  )
}

export default App
