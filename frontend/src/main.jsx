import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowRight,
  BookOpen,
  Database,
  FileSpreadsheet,
  LineChart,
  Menu,
  PieChart,
  X
} from 'lucide-react'
import {
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'
import './styles.css'

// ======================================================
// POWER BI EMBED CONFIGURATION
// ======================================================
// Add your published Power BI embed URL here.
//
// Example:
// const POWER_BI_EMBED_URL = 'https://app.powerbi.com/view?r=...'
//
// Leave empty until the Power BI report is published.
// ======================================================

const POWER_BI_EMBED_URL = ''

// ======================================================
// Exploratory Analysis Chart Data
// ======================================================

const income = [
  { band: 'Low', loan: 18.4, deposit: 21.2 },
  { band: 'Mid', loan: 55.5, deposit: 60.2 },
  { band: 'High', loan: 27.1, deposit: 30.1 }
]

// ======================================================
// Main Application
// ======================================================

function App() {
  const [open, setOpen] = useState(false)

  const go = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth' })

    setOpen(false)
  }

  return (
    <div>

      {/* ==================================================
          NAVIGATION
      ================================================== */}

      <header className="header">

        <div className="nav-wrap">

          <a
            className="logo"
            href="#top"
          >
            BA<span>.</span>
          </a>

          <nav className={open ? 'nav open' : 'nav'}>

            <button onClick={() => go('overview')}>
              Overview
            </button>

            <button onClick={() => go('eda')}>
              EDA
            </button>

            <button onClick={() => go('insights')}>
              Findings
            </button>

            <button onClick={() => go('powerbi')}>
              Power BI
            </button>

          </nav>

          <button
            className="menu"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <X /> : <Menu />}
          </button>

        </div>

      </header>


      <main id="top">

        {/* ==================================================
            HERO / PROJECT INTRODUCTION
        ================================================== */}

        <section className="hero wrap">

          <div className="hero-copy">

            <div className="tag">
              DATA ANALYTICS · BANKING
            </div>

            <h1>
              Banking Data Analysis
              <br />
              <i>From Data to Insights.</i>
            </h1>

            <p className="lead">
              An end-to-end data analytics project focused on
              understanding customer and banking data through
              Python-based exploratory analysis and Power BI
              business intelligence reporting.
            </p>

            <div className="actions">

              <button
                className="btn primary"
                onClick={() => go('eda')}
              >
                View Exploratory Analysis
                <ArrowRight size={16} />
              </button>

              <button
                className="btn secondary"
                onClick={() => go('powerbi')}
              >
                View Power BI Dashboard
              </button>

            </div>

          </div>


          <div className="hero-note">

            <span>
              ANALYTICAL WORKFLOW
            </span>

            <div>
              01
              <b>Data Preparation</b>
            </div>

            <div>
              02
              <b>Exploratory Analysis</b>
            </div>

            <div>
              03
              <b>Key Findings</b>
            </div>

            <div>
              04
              <b>Power BI Reporting</b>
            </div>

          </div>

        </section>


        {/* ==================================================
            PROJECT OVERVIEW
        ================================================== */}

        <section
          id="overview"
          className="section wrap"
        >

          <SectionTitle
            eyebrow="01 · PROJECT OVERVIEW"
            title="Banking Analytics"
            text="This project demonstrates an end-to-end analytical workflow, beginning with raw banking data and progressing through exploratory analysis, interpretation of findings, and business intelligence reporting."
          />


          <div className="cards three">

            <Info
              icon={<Database />}
              n="01"
              title="Data Preparation"
              text="Review and preparation of banking and client datasets for analytical use, including understanding data structure, variables, and data quality."
            />

            <Info
              icon={<LineChart />}
              n="02"
              title="Exploratory Data Analysis"
              text="Use Python and Pandas to examine distributions, customer segments, financial variables, relationships, and patterns within the dataset."
            />

            <Info
              icon={<PieChart />}
              n="03"
              title="Business Intelligence"
              text="Translate analytical findings into an interactive Power BI reporting layer focused on banking KPIs and business-oriented insights."
            />

          </div>

        </section>


        {/* ==================================================
            PYTHON EDA
        ================================================== */}

        <section
          id="eda"
          className="section alt"
        >

          <div className="wrap">

            <SectionTitle
              eyebrow="02 · EXPLORATORY DATA ANALYSIS"
              title="Python-Based Data Exploration"
              text="The exploratory analysis uses Python and Pandas to understand the dataset, identify patterns, evaluate relationships, and develop the findings later presented through Power BI."
            />


            <div className="eda-grid">

              {/* Analytical methodology */}

              <div className="process">

                <div className="step">

                  <span>01</span>

                  <div>

                    <h3>
                      Data Understanding
                    </h3>

                    <p>
                      Examine dataset structure, dimensions,
                      variables, data types, and descriptive
                      statistics to establish an understanding
                      of the available information.
                    </p>

                  </div>

                </div>


                <div className="step">

                  <span>02</span>

                  <div>

                    <h3>
                      Data Preparation
                    </h3>

                    <p>
                      Prepare analytical variables and create
                      meaningful customer segments for comparison
                      and further exploration.
                    </p>

                  </div>

                </div>


                <div className="step">

                  <span>03</span>

                  <div>

                    <h3>
                      Exploratory Analysis
                    </h3>

                    <p>
                      Investigate numerical and categorical
                      variables using summary statistics,
                      visualizations, and comparative analysis.
                    </p>

                  </div>

                </div>


                <div className="step">

                  <span>04</span>

                  <div>

                    <h3>
                      Relationship Analysis
                    </h3>

                    <p>
                      Evaluate relationships between selected
                      financial variables using correlation and
                      visual analytical techniques.
                    </p>

                  </div>

                </div>

              </div>


              {/* Analytical visualization */}

              <div className="chart-card">

                <div className="card-head">

                  <div>

                    <span>
                      EXPLORATORY ANALYSIS
                    </span>

                    <h3>
                      Loans and Deposits by Income Band
                    </h3>

                  </div>

                </div>


                <ResponsiveContainer
                  width="100%"
                  height={310}
                >

                  <BarChart
                    data={income}
                    margin={{
                      top: 10,
                      right: 8,
                      left: -15,
                      bottom: 0
                    }}
                  >

                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                    />

                    <XAxis
                      dataKey="band"
                    />

                    <YAxis />

                    <Tooltip />

                    <Legend />

                    <Bar
                      dataKey="loan"
                      name="Loans"
                      fill="#111827"
                      radius={[5, 5, 0, 0]}
                    />

                    <Bar
                      dataKey="deposit"
                      name="Deposits"
                      fill="#2563eb"
                      radius={[5, 5, 0, 0]}
                    />

                  </BarChart>

                </ResponsiveContainer>


                <small>
                  Comparative visualization of loan and deposit
                  values across income segments.
                </small>

              </div>

            </div>


            {/* ==================================================
                NOTEBOOK RESOURCES
            ================================================== */}

            <div className="notebook-row">

              <a
                className="file"
                href="#notebook-v1"
                onClick={() =>
                  document
                    .getElementById('notebook-v1')
                    ?.scrollIntoView({
                      behavior: 'smooth'
                    })
                }
              >

                <BookOpen size={19} />

                <div>

                  <b>
                    BankEDA_V1.ipynb
                  </b>

                  <span>
                    Initial exploratory data analysis
                  </span>

                </div>

                <ArrowRight size={16} />

              </a>


              <a
                className="file"
                href="#notebook-v2"
                onClick={() =>
                  document
                    .getElementById('notebook-v2')
                    ?.scrollIntoView({
                      behavior: 'smooth'
                    })
                }
              >

                <BookOpen size={19} />

                <div>

                  <b>
                    BankEDA_V2.ipynb
                  </b>

                  <span>
                    Extended exploratory analysis
                  </span>

                </div>

                <ArrowRight size={16} />

              </a>

            </div>


            {/* ==================================================
                NOTEBOOK V1
            ================================================== */}

            <div
              id="notebook-v1"
              className="notebook-viewer"
            >

              <div className="viewer-head">

                <span>
                  PYTHON ANALYSIS
                </span>

                <b>
                  BankEDA_V1.ipynb
                </b>

              </div>


              <iframe
                title="BankEDA Version 1"
                src="/notebooks/BankEDA_V1.html"
              />

            </div>


            {/* ==================================================
                NOTEBOOK V2
            ================================================== */}

            <div
              id="notebook-v2"
              className="notebook-viewer"
            >

              <div className="viewer-head">

                <span>
                  PYTHON ANALYSIS
                </span>

                <b>
                  BankEDA_V2.ipynb
                </b>

              </div>


              <iframe
                title="BankEDA Version 2"
                src="/notebooks/BankEDA_V2.html"
              />

            </div>

          </div>

        </section>


        {/* ==================================================
            KEY FINDINGS
        ================================================== */}

        <section
          id="insights"
          className="section wrap"
        >

          <SectionTitle
            eyebrow="03 · KEY ANALYTICAL FINDINGS"
            title="Insights from the Analysis"
            text="The exploratory analysis provides the foundation for identifying meaningful patterns and communicating them through the final business intelligence dashboard."
          />


          <div className="finding-grid">

            <Finding
              n="01"
              title="Income-Based Segmentation"
              text="Customers are grouped into Low, Mid, and High income segments to support comparative analysis of loan and deposit behavior."
            />

            <Finding
              n="02"
              title="Loan Portfolio Distribution"
              text="The analysis highlights differences in loan values across income segments, providing a basis for understanding portfolio concentration."
            />

            <Finding
              n="03"
              title="Regional Analysis"
              text="Regional comparisons provide additional context for evaluating differences in banking activity across geographic markets."
            />

            <Finding
              n="04"
              title="Financial Variable Relationships"
              text="Correlation analysis is used to examine relationships among selected financial variables, including deposits, checking, and savings balances."
            />

          </div>

        </section>


        {/* ==================================================
            POWER BI
        ================================================== */}

        <section
          id="powerbi"
          className="section dark"
        >

          <div className="wrap">

            <SectionTitle
              dark
              eyebrow="04 · POWER BI REPORTING"
              title="Business Intelligence Dashboard"
              text="The final stage of the project transforms the analytical findings into a business-facing Power BI report designed to communicate key banking metrics and trends."
            />


            <div className="bi-layout">

              {/* Dashboard preview */}

              <div className="bi-preview">

                <div className="bi-title">
                  Banking Analytics Dashboard
                </div>


                <div className="bi-kpis">

                  <span>
                    <b>188</b>
                    Total Clients
                  </span>

                  <span>
                    <b>$139.9M</b>
                    Total Loans
                  </span>

                  <span>
                    <b>$111.49M</b>
                    Total Deposits
                  </span>

                  <span>
                    <b>$5.17M</b>
                    Total Fees
                  </span>

                </div>


                <div className="fake-bars">

                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />

                </div>

              </div>


              {/* Dashboard description */}

              <div className="bi-copy">

                <div className="tag light">
                  BUSINESS INTELLIGENCE DELIVERABLE
                </div>


                <h3>
                  Communicating analytical results through Power BI.
                </h3>


                <p>
                  The Power BI layer consolidates the project's
                  findings into an interactive reporting experience,
                  allowing users to review key banking KPIs and
                  explore customer and portfolio characteristics.
                </p>


                {/* ==================================================
                    LIVE POWER BI REPORT
                ================================================== */}

                <div className="powerbi-embed">

                  {POWER_BI_EMBED_URL ? (

                    <iframe
                      className="powerbi-frame"
                      title="Banking Analytics Power BI Dashboard"
                      src={POWER_BI_EMBED_URL}
                      allowFullScreen
                    />

                  ) : (

                    <div className="embed-placeholder">

                      <b>
                        Power BI Report
                      </b>

                      <span>
                        A published Power BI report can be embedded
                        here using its approved embed URL.
                      </span>

                    </div>

                  )}

                </div>


                {/* Original Power BI deliverable */}

                <a
                  className="btn light-btn"
                  href="/powerbi/Banking_Dashboard_Presentation.pptx"
                  target="_blank"
                  rel="noreferrer"
                >

                  View Power BI Deliverable

                  <ArrowRight size={16} />

                </a>


                <p className="hint">
                  To enable the live dashboard, add the published
                  Power BI embed URL to POWER_BI_EMBED_URL in
                  src/main.jsx.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ==================================================
            PROJECT RESOURCES
        ================================================== */}

        <section className="section wrap">

          <SectionTitle
            eyebrow="05 · PROJECT RESOURCES"
            title="Analysis Resources & Deliverables"
            text="Access the datasets, Python analysis notebooks, and Power BI deliverables used throughout the project."
          />


          <div className="file-grid">

            <File
              icon={<FileSpreadsheet />}
              title="Banking Dataset"
              desc="Primary dataset used for exploratory data analysis"
              href="/data/Banking.csv"
            />


            <File
              icon={<FileSpreadsheet />}
              title="Client Reference Dataset"
              desc="Supporting client demographic data used in the analysis"
              href="/data/clients.csv"
            />


            <a
              className="file"
              href="#eda"
              onClick={() => go('eda')}
            >

              <div className="file-icon">
                <BookOpen />
              </div>

              <div>

                <b>
                  Python EDA Notebooks
                </b>

                <span>
                  Exploratory analysis, visualizations, and findings
                </span>

              </div>

              <ArrowRight size={16} />

            </a>


            <File
              icon={<PieChart />}
              title="Power BI Dashboard"
              desc="Interactive business intelligence reporting deliverable"
              href="/powerbi/Banking_Dashboard_Presentation.pptx"
            />

          </div>

        </section>

      </main>


      {/* ==================================================
          FOOTER
      ================================================== */}

      <footer>

        <div className="wrap footer-inner">

          <div>

            <b>
              Banking Analytics
            </b>

            <span>
              Data Analytics Case Study
            </span>

          </div>


          <span>
            Python · Pandas · Exploratory Data Analysis · Power BI
          </span>

        </div>

      </footer>

    </div>
  )
}


// ======================================================
// SECTION TITLE COMPONENT
// ======================================================

function SectionTitle({
  eyebrow,
  title,
  text,
  dark
}) {

  return (

    <div
      className={
        dark
          ? 'section-title dark-title'
          : 'section-title'
      }
    >

      <div className="tag">
        {eyebrow}
      </div>

      <h2>
        {title}
      </h2>

      <p>
        {text}
      </p>

    </div>

  )
}


// ======================================================
// PROJECT AREA CARD
// ======================================================

function Info({
  icon,
  n,
  title,
  text
}) {

  return (

    <article className="info">

      <div className="icon">
        {icon}
      </div>

      <span>
        {n}
      </span>

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

    </article>

  )
}


// ======================================================
// FINDING CARD
// ======================================================

function Finding({
  n,
  title,
  text
}) {

  return (

    <article className="finding">

      <span>
        {n}
      </span>

      <div>

        <h3>
          {title}
        </h3>

        <p>
          {text}
        </p>

      </div>

    </article>

  )
}


// ======================================================
// RESOURCE / FILE CARD
// ======================================================

function File({
  icon,
  title,
  desc,
  href
}) {

  return (

    <a
      className="file"
      href={href}
    >

      <div className="file-icon">
        {icon}
      </div>

      <div>

        <b>
          {title}
        </b>

        <span>
          {desc}
        </span>

      </div>

      <ArrowRight size={16} />

    </a>

  )
}


// ======================================================
// REACT APPLICATION ENTRY
// ======================================================

createRoot(
  document.getElementById('root')
).render(
  <App />
)