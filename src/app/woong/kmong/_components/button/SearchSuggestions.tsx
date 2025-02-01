import React from "react"

interface SearchSuggestionsProps {
  children: React.ReactNode
}

export default function SearchSuggestions(props: SearchSuggestionsProps) {
  return (
    <button className="border border-[#e4e5ed] p-1.5 rounded-[14px] hover:bg-gray-200">
      {props.children}
    </button>
  )
}
