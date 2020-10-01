import PropTypes from 'prop-types'
import React from 'react'

const widgets = [
  { name: 'profile0', value: 'f4bb10a2-0af2-441b-8684-05bfd26e1e03' },
  { name: 'profile1', value: 'ee48bfd6-f320-4e85-939a-c907a4175f65' },
  { name: 'profile2', value: '11b0bd73-6bd0-402e-b4ed-3aeb9ff0a93c' },
  { name: 'profile3', value: '11b0bd73-6bd0-402e-b4ed-3aeb9ff0a93c' },
  { name: 'profile4', value: '84dec08b-6e54-447d-819b-1fb3f8ef2a5d' },
  { name: 'profile5', value: 'dfd94030-7080-4faa-8007-d3f0a0115fdc' },
  { name: 'profile6', value: '10ad1e09-9f25-4795-aa3c-24b519e36c82' },
  { name: 'profile7', value: 'c1148361-ebb4-4c4b-983d-2a66091c2203' },
]

const languages = [
  { name: 'english', value: 'en-US' },
  { name: 'german', value: 'de-DE' },
]

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Widget ID</h1>
        <p>choose widget id</p>
        <select
          onChange={props.onSelectChange}
          defaultValue="f4bb10a2-0af2-441b-8684-05bfd26e1e03"
        >
          {widgets.map(item => (
            <option value={item.value}>
              {item.name} - {item.value}
            </option>
          ))}
        </select>
        <h1>Widget language</h1>
        <p>choose widget language</p>
        <select onChange={props.onLanguageChange} defaultValue="en-US">
          {languages.map(item => (
            <option value={item.value}>{item.name}</option>
          ))}
        </select>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
