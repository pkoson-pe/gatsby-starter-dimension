import PropTypes from 'prop-types'
import React, { useRef } from 'react'

const widgets = [
  {
    name: 'Scenario A paid plan',
    value: '11b0bd73-6bd0-402e-b4ed-3aeb9ff0a93c',
  },

  {
    name: 'Scenario A free plan',
    value: 'c1148361-ebb4-4c4b-983d-2a66091c2203',
  },

  {
    name: 'Scenario A Proven Expert only',
    value: '37a03660-7d7f-44d1-9969-3c611598197a',
  },

  {
    name: 'Scenario A External Source only',
    value: 'eca4dce0-fcf5-43d6-a12c-f31791670ec0',
  },

  { name: 'Scenario B', value: '10ad1e09-9f25-4795-aa3c-24b519e36c82' },

  { name: 'Scenario C', value: '84dec08b-6e54-447d-819b-1fb3f8ef2a5d' },

  { name: 'Scenario A MPS', value: 'aca5fd33-ac33-443b-8911-f5e3ab568e31' },

  { name: 'Scenario B MPS', value: 'ab25cdca-1bb8-4f1d-a535-4f31e00f41e3' },

  { name: 'profile0', value: 'f4bb10a2-0af2-441b-8684-05bfd26e1e03' },
  { name: 'profile1', value: 'ee48bfd6-f320-4e85-939a-c907a4175f65' },
  { name: 'profile2', value: '11b0bd73-6bd0-402e-b4ed-3aeb9ff0a93c' },
  { name: 'profile3', value: '11b0bd73-6bd0-402e-b4ed-3aeb9ff0a93c' },
  { name: 'profile4', value: '84dec08b-6e54-447d-819b-1fb3f8ef2a5d' },
  { name: 'profile5', value: 'dfd94030-7080-4faa-8007-d3f0a0115fdc' },
  { name: 'profile6', value: '10ad1e09-9f25-4795-aa3c-24b519e36c82' },
  { name: 'profile7', value: 'c1148361-ebb4-4c4b-983d-2a66091c2203' },
  { name: 'profile8', value: 'ab753382-8548-4c87-a56f-a3c224efdd64' },
  { name: 'profile9', value: '0210d145-1cf7-4dc9-9d8e-5effe7533076' },
  { name: 'profile10', value: 'ce78f05e-3a19-42f5-93d0-e0bc119a68d5' },
  { name: 'profile11', value: 'eca4dce0-fcf5-43d6-a12c-f31791670ec0' },
  { name: 'profile12', value: '43d4bdc0-b1a4-42da-8038-859e630d9f5a' },
  { name: 'profile13', value: 'dbcf129c-e95d-493a-b4f1-22a9f21e7667' },
  { name: 'profile14', value: '49af6a63-b71d-4446-8aa3-3234c6ce4bb0' },
]

const languages = [
  { name: 'english', value: 'en-US' },
  { name: 'german', value: 'de-DE' },
]

const Header = props => {
  const ref = useRef()
  return (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
      <div className="logo">
        <span className="icon fa-diamond"></span>
      </div>
      <div className="content">
        <div className="inner">
          <h1>Select widget ID</h1>
          <p>choose widget id</p>
          <select
            onChange={props.onSelectChange}
            defaultValue={widgets[0].value}
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
          <br />
          <h1>Custom widget ID</h1>
          <div>
            <div className="half">
              <label htmlFor="widgetId">widgetId</label>
              <input type="text" name="widgetId" id="widgetId" ref={ref} />
            </div>
            <div className="half">
              <button
                onClick={() => {
                  props.onSelectChange({ target: { value: ref.current.value } })
                }}
              >
                Show widget
              </button>
            </div>
          </div>
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
}

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
