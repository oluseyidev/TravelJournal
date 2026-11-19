import Header from "./Components/Header"
import Entry from "./Components/Entry"
import data from "./Components/data"

export default function App() {
    const entryElements = data.map(entry => {
        return (
         <>
            <div className="entry">
                <Entry 
                    key={entry.id}
                    {...entry}
                />
            </div>
          </>
    )
        
})
return (
    <div>
         <Header />
        {entryElements}
    </div>
)
}