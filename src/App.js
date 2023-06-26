import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'
import Review from './Review'
import questionsData from './questions_data'
import SingleQuestion from './Question'
const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  const [questions, setQuestions] = useState(questionsData)

  return (
    <main>
      <section className="menu section">
        <h1>reštaurácia u Slováka</h1>
        <div className="title">
          <h2>menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
        <Review />
        <div className="title">
          <h2>FAQ</h2>
          <div className="underline"></div>
        </div>
        <div className="container">
          <h3>questions and answers</h3>
          <section className="info">
            {questions.map((question) => {
              return <SingleQuestion key={question.id} {...question} />
            })}
          </section>
        </div>
      </section>
    </main>
  )
}

export default App
