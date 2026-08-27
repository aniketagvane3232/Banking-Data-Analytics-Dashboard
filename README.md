# Banking Analytics — Data Analyst Portfolio

## Interview flow
**Dataset → Python EDA → Findings → Power BI**

The React site is a case-study presentation of the actual analytical work.

### Direct notebook display
The original `BankEDA_V1.ipynb` and `BankEDA_V2.ipynb` are converted to HTML and displayed directly inside the React page. This lets an interviewer see code, markdown and saved notebook outputs without leaving the site.

### Power BI
A live Power BI report can be embedded in the site.

1. Publish the report in Power BI.
2. Get the appropriate **embed in website / secure embed** URL for your report and sharing setup.
3. Put it in `frontend/src/main.jsx`:
   `const POWER_BI_EMBED_URL = 'YOUR_EMBED_URL'`
4. Deploy the `frontend` folder to Vercel.

The original Power BI presentation remains available under `frontend/public/powerbi/`.

### Run
```bash
cd frontend
npm install
npm run dev
```
