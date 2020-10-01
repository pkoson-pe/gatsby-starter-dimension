import React from 'react'
import Layout from '../components/layout'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading',
      currentId: 'f4bb10a2-0af2-441b-8684-05bfd26e1e03',
      currentLanguage: 'en-US',
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  componentDidMount() {
    const isBrowser = typeof window !== `undefined`
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
      if (isBrowser && window?.provenExpert) {
        window.provenExpert.proSeal({
          widgetId: this.state.currentId,
          language: this.state.currentLanguage,
          bannerColor: '#0DB1CD',
          textColor: '#FFFFFF',
          showReviews: true,
          hideDate: false,
          hideName: false,
          bottom: '130px',
          hasUnPublished: false,
          hasReviews: true,
          googleStars: true,
        })
      }
    }, 100)
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  setWrapperRef(node) {
    this.wrapperRef = node
  }

  handleOpenArticle(article) {
    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout,
      })
    }, 350)
  }

  handleCloseArticle() {
    this.setState({
      articleTimeout: !this.state.articleTimeout,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: '',
      })
    }, 350)
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isArticleVisible) {
        this.handleCloseArticle()
      }
    }
  }

  onSelectChange = ({ target: { value } }) => {
    this.setState({ currentId: value })
    window.provenExpert.proSeal({
      widgetId: value,
      language: this.state.currentLanguage,
      bannerColor: '#0DB1CD',
      textColor: '#FFFFFF',
      showReviews: true,
      hideDate: false,
      hideName: false,
      bottom: '130px',
      hasUnPublished: false,
      hasReviews: true,
      googleStars: true,
    })
  }

  onLanguageChange = ({ target: { value } }) => {
    this.setState({ currentLanguage: value })
    debugger
    window.provenExpert.proSeal({
      widgetId: this.state.currentId,
      language: value,
      bannerColor: '#0DB1CD',
      textColor: '#FFFFFF',
      showReviews: true,
      hideDate: false,
      hideName: false,
      bottom: '130px',
      hasUnPublished: false,
      hasReviews: true,
      googleStars: true,
    })
  }

  render() {
    return (
      <>
        <Layout location={this.props.location}>
          tutaj będzie header
          <div
            className={`body ${this.state.loading} ${
              this.state.isArticleVisible ? 'is-article-visible' : ''
            }`}
          >
            <div id="wrapper">
              <Header
                onOpenArticle={this.handleOpenArticle}
                timeout={this.state.timeout}
                onSelectChange={this.onSelectChange}
                onLanguageChange={this.onLanguageChange}
              />
              <Main
                isArticleVisible={this.state.isArticleVisible}
                timeout={this.state.timeout}
                articleTimeout={this.state.articleTimeout}
                article={this.state.article}
                onCloseArticle={this.handleCloseArticle}
                setWrapperRef={this.setWrapperRef}
              />
              <Footer timeout={this.state.timeout} />
            </div>
            <div id="bg"></div>
          </div>
        </Layout>
      </>
    )
  }
}

export default IndexPage
