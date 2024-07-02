import google.generativeai as genai
import subprocess


GOOGLE_API_KEY = "YOUR_API_KEY"
genai.configure(api_key=GOOGLE_API_KEY)

model = genai.GenerativeModel("gemini-pro")


response = model.generate_content(
    contents="Crie um artigo sobre os conceitos básicos de CSS e HTML, e quero que esse artigo contenha:Quando e por quem essas linguagens foram criadas,exemplos de tags para iniciantes, e os outros conceitos básicos, faça o artigo sem títulos. ",
)

generated_text = response.text
print(generated_text)

with open("article.txt", "w", encoding="utf-8") as f:
    f.write(response.text)



