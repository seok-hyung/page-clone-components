import React from "react"

interface SearchSuggestionsProps {
  children: React.ReactNode
}

export default function SearchSuggestions(props: SearchSuggestionsProps) {
  return <button className="border p-1.5 rounded-xl">{props.children}</button>
}
