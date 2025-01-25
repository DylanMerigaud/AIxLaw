# [LLM x Law Hackathon](https://lu.ma/63trnmfl?tk=2nF8W5)

Project submited for the [LLM x Law Hackathon](https://lu.ma/63trnmfl?tk=2nF8W5).

## LLM x Law Hackathon @Station F
​LLMs, a foundation model capable of understanding and generating natural language text, have the potential to transform legal research, contract analysis, data privacy, regulation and much more.

​This hackathon hopes to build solutions that consider the safe and trustworthy integration of LLMs for legal work. You'll be asked to leverage an LLM toolkit and build & ship a working demo/prototype that tackles a pressing legal problem. Join us for the first edition of the LLM x Law Hackathon, founded by CodeX at Stanford, in Paris! We encourage you to think boldly, creatively, and across multiple dimensions!

​Hosted by:
Stanford Center for Legal Informatics (https://law.stanford.edu/codex-the-stanford-center-for-legal-informatics/)
Koyeb (https://www.koyeb.com/)

​Hosted by:
Megan Ma (Stanford CodeX)
Pierre-Loïc Doulcet (Stanford CodeX, LlamaIndex)
Yann Léger (Koyeb)

​Sponsors:
Koyeb (https://www.koyeb.com/)
Neon (https://neon.tech/)
WalterBillet (https://walterbillet.com/)
LlamaIndex (https://www.llamaindex.ai/)
Mistral AI (https://mistral.ai/)
Jus Mundi (https://jusmundi.com/en)
Thomson Reuters (https://www.thomsonreuters.com/en.html)

​Judged by:
Marie Torelli (Mistral)
Chen Gu (Dentons)
Thu Ha Nghiem (Cloudera)
Campbell Hutcheson (Angel Investor)
Yann Léger (Koyeb)
Atli Cervantes (Neon)
Pierce Kelaita (GenAI Collective)
Tara Waters (C-suite legal)
Ilona Logvinova (Cleary Gottlieb)
John Ferro (Jus Mundi)
Jonathan Schwarz (Safe Sign Technologies/Thomson Reuters)
Alexander Fessas (ICC)
Hélène van Lith (ICC)
Victoria Albrecht (Springbok AI)

​Mentors:
Alex Mac (Truth Systems, Stanford CodeX)
Doa Biddine (Sciences Po, World Bank)
Nathalie Fouet (ICC)
Nicolas Charliglione (Koyeb)
Teodora Groza (Sciences Po)
Julia Zeidan (Jus Mundi)

The rest of this README.md is from the starter repo.



This is a [LlamaIndex](https://www.llamaindex.ai/) project using [Next.js](https://nextjs.org/) bootstrapped with [`create-llama`](https://github.com/run-llama/LlamaIndexTS/tree/main/packages/create-llama).

## Getting Started

First, install the dependencies:

```
npm install
```

Second, generate the embeddings of the documents in the `./data` directory (if this folder exists - otherwise, skip this step):

```
npm run generate
```

Third, run the development server:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Using Docker

1. Build an image for the Next.js app:

```
docker build -t <your_app_image_name> .
```

2. Generate embeddings:

Parse the data and generate the vector embeddings if the `./data` folder exists - otherwise, skip this step:

```
docker run \
  --rm \
  -v $(pwd)/.env:/app/.env \ # Use ENV variables and configuration from your file-system
  -v $(pwd)/config:/app/config \
  -v $(pwd)/data:/app/data \
  -v $(pwd)/cache:/app/cache \ # Use your file system to store the vector database
  <your_app_image_name> \
  npm run generate
```

3. Start the app:

```
docker run \
  --rm \
  -v $(pwd)/.env:/app/.env \ # Use ENV variables and configuration from your file-system
  -v $(pwd)/config:/app/config \
  -v $(pwd)/cache:/app/cache \ # Use your file system to store gea vector database
  -p 3000:3000 \
  <your_app_image_name>
```

## Learn More

To learn more about LlamaIndex, take a look at the following resources:

- [LlamaIndex Documentation](https://docs.llamaindex.ai) - learn about LlamaIndex (Python features).
- [LlamaIndexTS Documentation](https://ts.llamaindex.ai) - learn about LlamaIndex (Typescript features).

You can check out [the LlamaIndexTS GitHub repository](https://github.com/run-llama/LlamaIndexTS) - your feedback and contributions are welcome!
