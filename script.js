// Quiz Data
const quizData = [
  {
    "question": "A 28-year-old man falls straddling a metal bar and presents with blood at the urethral meatus and swelling of the scrotum and perineum. Imaging confirms a rupture of the spongy urethra. Which fascial layer limits the spread of extravasated urine into the thighs?",
    "choices": [
      "Dartos fascia",
      "Buck's fascia",
      "Colles’ fascia",
      "Scarpa’s fascia",
      "Fascia lata"
    ],
    "correctAnswer": 4,
    "explanation": "Urine from a ruptured spongy urethra collects in the superficial perineal pouch, bounded by Colles’ fascia (in the perineum), Dartos fascia (in the scrotum), and Scarpa’s fascia (in the lower abdomen). Scarpa’s fascia fuses with the fascia lata of the thigh, preventing extravasation into the thighs. Buck’s fascia confines urine deep to it unless ruptured."
  },
  {
    "question": "A 68-year-old woman with diabetes develops a horseshoe-shaped abscess involving both ischioanal fossae. Which of the following anatomical structures allows this infection to spread bilaterally?",
    "choices": [
      "Anococcygeal ligament",
      "Coccygeus muscle",
      "Levator ani",
      "Pudendal canal",
      "Sacrotuberous ligament"
    ],
    "correctAnswer": 0,
    "explanation": "The anococcygeal ligament lies between the two ischioanal fossae and allows infections to cross the midline posteriorly, creating a horseshoe-shaped abscess. The levator ani separates the fossae from pelvic structures but does not facilitate communication. The pudendal canal contains neurovascular elements and is lateral to the abscess."
  },
  {
    "question": "During a mediolateral episiotomy, care must be taken to avoid damage to the perineal body. Which of the following best describes the importance of this structure?",
    "choices": [
      "It anchors the urethra to the pubic symphysis",
      "It supports pelvic viscera by anchoring several perineal muscles",
      "It forms the inferior boundary of the deep perineal pouch",
      "It houses the external urethral sphincter",
      "It conveys sympathetic innervation to the clitoris and penis"
    ],
    "correctAnswer": 1,
    "explanation": "The perineal body is a central fibromuscular node anchoring key muscles such as the bulbospongiosus, superficial transverse perineal, and external anal sphincter. It provides structural support to pelvic floor integrity. It is not involved in nerve transmission or sphincter housing directly."
  },
  {
    "question": "A 60-year-old man is diagnosed with erectile dysfunction due to diabetic autonomic neuropathy. Which of the following nerves provides the parasympathetic innervation responsible for penile erection?",
    "choices": [
      "Ilioinguinal nerve",
      "Pudendal nerve",
      "Pelvic splanchnic nerves",
      "Inferior hypogastric plexus",
      "Genitofemoral nerve"
    ],
    "correctAnswer": 2,
    "explanation": "Parasympathetic fibers from the pelvic splanchnic nerves (S2–S4) via the cavernous nerves initiate erection by causing vasodilation of the helicine arteries. While the pudendal nerve provides sensory and motor innervation to the perineum, it does not carry parasympathetics. The hypogastric plexus carries sympathetic fibers."
  },
  {
    "question": "A 43-year-old woman is undergoing a pudendal nerve block for labor analgesia. Which landmark is most important for locating the nerve transvaginally?",
    "choices": [
      "Ischial spine",
      "Sacrotuberous ligament",
      "Obturator internus muscle",
      "Pubic tubercle",
      "Urogenital diaphragm"
    ],
    "correctAnswer": 0,
    "explanation": "The pudendal nerve passes near the ischial spine and sacrospinous ligament, making the ischial spine the key landmark for a transvaginal pudendal nerve block. The sacrotuberous ligament is adjacent but less precise. The obturator internus is more lateral. The pubic tubercle and urogenital diaphragm are not involved in locating the nerve."
  },
  {
    "question": "A 45-year-old man presents with a 4.2 cm mass in the right kidney found incidentally on imaging. Grossly, it is tan-brown with a central stellate scar. Histologically, it contains eosinophilic cells filled with mitochondria. Genetic testing shows loss of chromosome 1 and Y. Which of the following is the most likely diagnosis?",
    "choices": [
      "Papillary renal cell carcinoma",
      "Angiomyolipoma",
      "Chromophobe renal cell carcinoma",
      "Clear cell renal cell carcinoma",
      "Oncocytoma"
    ],
    "correctAnswer": 4,
    "explanation": "This is a classic description of renal oncocytoma, a benign tumor arising from intercalated cells of the collecting duct. It presents as a tan, mahogany-colored mass with a central stellate scar and abundant mitochondria on EM. Loss of chromosome 1 and Y supports this diagnosis. Clear cell RCC would be yellow and lipid-rich. Chromophobe RCC shares histologic overlap but lacks the central scar and has distinct chromosomal losses. Angiomyolipoma contains fat and smooth muscle. Papillary RCC lacks these features."
  },
  {
    "question": "A 34-year-old man with a history of von Hippel-Lindau disease presents with hematuria. Imaging reveals multiple bilateral renal masses. Biopsy of one mass shows clear cytoplasm with a rich capillary network. Which chromosomal abnormality is most likely responsible for his condition?",
    "choices": [
      "Trisomy of chromosomes 7 and 17",
      "Loss of chromosome 22q11 (SMARCB1)",
      "Deletion of chromosome 3p25",
      "Translocation involving TFE3 (Xp11)",
      "Mutation in WT1 on 11p13"
    ],
    "correctAnswer": 2,
    "explanation": "Clear cell RCC is strongly associated with deletion of chromosome 3p25, which harbors the VHL gene. Inactivation of VHL leads to HIF accumulation and increased VEGF expression. Bilateral, multiple tumors and younger age further support VHL-associated clear cell RCC. Trisomy 7 and 17 suggest papillary RCC. SMARCB1 loss is linked to renal medullary carcinoma. TFE3 translocations define a distinct translocation RCC. WT1 mutations are involved in Wilms tumor."
  },
  {
    "question": "A 3-year-old child presents with a large abdominal mass and hematuria. Imaging reveals a solid renal mass. Histology shows blastemal cells, tubules, and spindle cells. Genetic testing reveals deletion of WT1 on chromosome 11p13. Which syndrome is most likely associated with this condition?",
    "choices": [
      "Beckwith-Wiedemann syndrome",
      "Denys-Drash syndrome",
      "WAGR syndrome",
      "Tuberous sclerosis complex",
      "Birt-Hogg-Dubé syndrome"
    ],
    "correctAnswer": 2,
    "explanation": "WAGR syndrome (Wilms tumor, Aniridia, Genitourinary anomalies, and mental Retardation) is linked to deletion of the WT1 gene on 11p13. The patient likely has Wilms tumor, a nephroblastoma with characteristic triphasic histology. Denys-Drash and Beckwith-Wiedemann also predispose to Wilms but have distinct features like gonadal dysgenesis or organomegaly. Tuberous sclerosis is associated with angiomyolipoma. Birt-Hogg-Dubé is linked to oncocytomas and chromophobe RCC."
  },
  {
    "question": "A renal mass is resected from a 29-year-old man with sickle cell trait. The tumor is centered in the renal medulla and shows pleomorphic high-grade nuclei with neutrophilic infiltration. Nearly all cases present with metastatic disease. What is the most likely diagnosis?",
    "choices": [
      "Chromophobe renal cell carcinoma",
      "Papillary renal cell carcinoma",
      "Renal medullary carcinoma (SMARCB1-deficient)",
      "Xp11 translocation RCC",
      "Clear cell renal cell carcinoma"
    ],
    "correctAnswer": 2,
    "explanation": "Renal medullary carcinoma is an aggressive neoplasm almost exclusively seen in young individuals with sickle cell trait or disease. It arises in the medulla, is SMARCB1-deficient, and nearly always presents with metastasis. It has a poor prognosis. Chromophobe RCC and papillary RCC are less aggressive. Xp11 RCC presents in younger individuals but has TFE3 fusions, not SMARCB1 loss. Clear cell RCC is more common but arises in the cortex."
  },
  {
    "question": "A 14-year-old girl presents with a renal mass. Biopsy shows papillary architecture with abundant psammoma bodies. Genetic analysis reveals a translocation involving TFE3 at Xp11. Which of the following best describes the typical prognosis of this tumor compared to clear cell RCC?",
    "choices": [
      "Better prognosis than clear cell RCC",
      "Similar prognosis to clear cell RCC",
      "Significantly worse prognosis than clear cell RCC",
      "Cure is likely with surgery alone",
      "Indolent course with no risk of metastasis"
    ],
    "correctAnswer": 1,
    "explanation": "Xp11 translocation RCC is more common in pediatric patients and presents with papillary features, clear cells, and psammoma bodies. It involves overexpression of TFE3. Prognosis is similar to clear cell RCC. It may behave aggressively despite early age. It is not indolent, and cure is not guaranteed by surgery alone. Psammoma bodies help distinguish it histologically."
  },
  {
    "question": "A newborn presents with ambiguous genitalia, hypotension, and vomiting. Lab results show hyponatremia, hyperkalemia, and low cortisol. Serum 17-hydroxyprogesterone is markedly elevated. Which of the following enzymes is most likely deficient?",
    "choices": [
      "11β-hydroxylase",
      "3β-hydroxysteroid dehydrogenase",
      "17α-hydroxylase",
      "21α-hydroxylase",
      "StAR protein"
    ],
    "correctAnswer": 3,
    "explanation": "21α-hydroxylase deficiency is the most common cause of congenital adrenal hyperplasia. It blocks the production of both cortisol and aldosterone, leading to salt-wasting, hypotension, and elevated ACTH. The pathway is shunted to androgen synthesis, causing virilization. Elevated 17-hydroxyprogesterone is a diagnostic marker. 11β-hydroxylase deficiency causes hypertension. 17α-hydroxylase deficiency leads to sexual infantilism and hypertension. StAR deficiency impairs all steroidogenesis and is more severe."
  },
  {
    "question": "A 16-year-old boy presents with early-onset hypertension and delayed puberty. He has low cortisol and androgen levels but elevated corticosterone. Serum ACTH is elevated. What enzyme deficiency best explains this clinical picture?",
    "choices": [
      "11β-hydroxylase",
      "17α-hydroxylase",
      "21α-hydroxylase",
      "3β-hydroxysteroid dehydrogenase",
      "17β-hydroxysteroid dehydrogenase"
    ],
    "correctAnswer": 1,
    "explanation": "17α-hydroxylase deficiency impairs both cortisol and sex steroid synthesis while allowing mineralocorticoid precursors (like corticosterone) to accumulate. This results in hypertension and sexual underdevelopment. 11β-hydroxylase deficiency also causes hypertension but increases androgens. 3β-HSD deficiency leads to salt-wasting and ambiguous genitalia. 17β-HSD is involved in testosterone production, not cortisol or aldosterone synthesis."
  },
  {
    "question": "Which of the following is the rate-limiting step in the biosynthesis of all steroid hormones?",
    "choices": [
      "Conversion of pregnenolone to progesterone by 3β-HSD",
      "Hydroxylation of 17α-hydroxyprogesterone",
      "Transport of cholesterol into mitochondria by StAR protein",
      "Aromatization of testosterone into estradiol",
      "Hydroxylation of corticosterone by CYP11B2"
    ],
    "correctAnswer": 2,
    "explanation": "The rate-limiting step in steroidogenesis is the transport of cholesterol into the mitochondria, where it is converted to pregnenolone by CYP11A1. This step requires the StAR (Steroidogenic Acute Regulatory) protein. Other listed reactions are important but occur downstream in specific pathways (e.g., 3β-HSD, aromatase, CYP11B2)."
  },
  {
    "question": "A 3-week-old male infant has persistent vomiting and dehydration. Laboratory studies reveal low cortisol, low aldosterone, and elevated DHEA. Which of the following findings is most likely on physical examination?",
    "choices": [
      "Undervirilized genitalia",
      "Hypertension and facial acne",
      "Normal male genitalia with scrotal hyperpigmentation",
      "Ambiguous genitalia with testicular enlargement",
      "Hypospadias and macroorchidism"
    ],
    "correctAnswer": 2,
    "explanation": "In 21-hydroxylase deficiency, low cortisol and aldosterone result in salt-wasting. ACTH overproduction causes adrenal hyperplasia and excess androgen production, leading to virilization and DHEA elevation. Males typically have normal genitalia, but hyperpigmentation may be seen due to increased ACTH-derived MSH. Ambiguous genitalia and undervirilization are seen in other enzyme defects (e.g., 17α-hydroxylase, 3β-HSD)."
  },
  {
    "question": "A woman presents with hirsutism, irregular menses, central obesity, and high ACTH levels. Which of the following is the most likely diagnosis?",
    "choices": [
      "Cushing’s syndrome from adrenal tumor",
      "Cushing’s disease from pituitary ACTH overproduction",
      "Ectopic ACTH production from small cell lung cancer",
      "Congenital adrenal hyperplasia due to 21-hydroxylase deficiency",
      "Exogenous glucocorticoid use"
    ],
    "correctAnswer": 1,
    "explanation": "Cushing’s disease refers specifically to pituitary ACTH overproduction, leading to bilateral adrenal hyperplasia and excess cortisol and androgens. Hirsutism, obesity, and menstrual irregularities are classic features. Adrenal tumors suppress ACTH. Ectopic ACTH often causes more dramatic features and hypokalemia. Exogenous steroids suppress ACTH. CAH would have presented earlier with different electrolyte disturbances."
  },
  {
    "question": "A 67-year-old man presents with gross hematuria. Cystoscopy reveals a papillary lesion in the bladder. Biopsy shows a tumor with over 7 cell layers, mild nuclear atypia, and rare mitoses. Which of the following features most accurately distinguishes this tumor from a high-grade papillary urothelial carcinoma?",
    "choices": [
      "Presence of fibrovascular cores in papillary structures",
      "Abundance of mitotic figures and severe nuclear pleomorphism",
      "Origin from transitional epithelium",
      "Recurrence after transurethral resection",
      "Expression of urothelial markers on immunohistochemistry"
    ],
    "correctAnswer": 1,
    "explanation": "Low-grade papillary urothelial carcinomas show mild atypia and few mitoses. In contrast, high-grade tumors demonstrate pronounced pleomorphism and increased mitotic activity. Fibrovascular cores are present in both. Both arise from transitional epithelium and may recur. Immunohistochemical markers do not differentiate grade but help identify origin."
  },
  {
    "question": "A 58-year-old man with a history of paraplegia and chronic indwelling catheter develops dysuria and hematuria. Biopsy of a bladder mass reveals invasive squamous cell carcinoma. Which of the following best explains the pathogenesis of his cancer?",
    "choices": [
      "Transformation of umbrella cells due to FGFR3 mutation",
      "Metaplasia of urothelium due to chronic irritation",
      "Direct viral oncogenesis by BK virus",
      "Activation of TFE3 fusion gene",
      "Progression from flat carcinoma in situ"
    ],
    "correctAnswer": 1,
    "explanation": "Chronic irritation (from catheters or schistosomiasis) can lead to squamous metaplasia of the urothelium, a precursor to squamous cell carcinoma. This pathogenesis differs from papillary urothelial carcinoma, which may involve FGFR3. TFE3 fusions are linked to rare renal tumors. BK virus is associated with polyomavirus nephropathy."
  },
  {
    "question": "A 70-year-old man undergoes prostate biopsy due to elevated PSA. Histology shows small glands lacking basal cells, with prominent nucleoli. Immunohistochemistry confirms absence of basal cell markers. Which of the following is the most likely diagnosis?",
    "choices": [
      "Benign prostatic hyperplasia",
      "High-grade prostatic intraepithelial neoplasia",
      "Chronic prostatitis",
      "Prostate adenocarcinoma",
      "Urothelial carcinoma involving prostate"
    ],
    "correctAnswer": 3,
    "explanation": "Loss of the basal cell layer and presence of nucleoli are classic for prostate adenocarcinoma. BPH has intact basal layers. HGPIN shows atypical cells but retains basal cells. Chronic prostatitis may show inflammation but not architectural distortion. Urothelial carcinoma may involve prostate but arises from different cells and histology."
  },
  {
    "question": "A 64-year-old man is diagnosed with prostate adenocarcinoma. His Gleason score is 4+3=7. Which of the following best characterizes the histological pattern that contributes to the higher score?",
    "choices": [
      "Fused glands with poorly defined lumens",
      "Well-formed individual glands with regular spacing",
      "Sheets of undifferentiated cells without glandular structure",
      "Nests of cells with neuroendocrine features",
      "Central glandular necrosis and psammoma bodies"
    ],
    "correctAnswer": 0,
    "explanation": "Gleason pattern 4 includes fused glands and poorly formed lumens, indicating moderate differentiation. The higher number in the Gleason score (4+3) reflects a worse prognosis than 3+4. Pattern 3 is well-formed glands. Pattern 5 would be sheets or solid nests. Neuroendocrine features are seen in small cell carcinoma. Psammoma bodies are rare in prostate cancer."
  },
  {
    "question": "A 72-year-old man with metastatic prostate cancer develops new bone pain. Imaging shows multiple sclerotic bone lesions. Which of the following best explains this radiologic finding?",
    "choices": [
      "Lytic bone destruction due to osteoclast activation",
      "Reactive osteoblastic activity stimulated by tumor cells",
      "Metastatic deposits of squamous cell carcinoma",
      "Amyloid deposition within the bone marrow",
      "Renal osteodystrophy with secondary hyperparathyroidism"
    ],
    "correctAnswer": 1,
    "explanation": "Prostate cancer commonly metastasizes to bone in an osteoblastic pattern, leading to sclerotic lesions. Lytic lesions are typical of other cancers like renal or lung. Squamous cell carcinoma of the bladder rarely metastasizes to bone. Amyloidosis does not produce these changes. Renal osteodystrophy results in metabolic bone disease, not focal sclerosis."
  },
  {
    "question": "A 76-year-old woman in a nursing home is found to have cloudy, malodorous urine. She is afebrile, alert, and denies dysuria or urinary frequency. Urinalysis shows leukocyte esterase and nitrites. What is the most appropriate next step?",
    "choices": [
      "Begin empiric antibiotics for UTI",
      "Obtain a urine culture and treat if positive",
      "Start nitrofurantoin for 5 days",
      "No treatment is needed",
      "Order renal ultrasound"
    ],
    "correctAnswer": 3,
    "explanation": "This patient has asymptomatic bacteriuria (ASB), which does not require treatment in the absence of urinary symptoms, except in pregnancy or before urologic procedures. Malodorous or cloudy urine is not diagnostic of infection. Starting antibiotics contributes to resistance and adverse effects. Urine cultures in ASB do not alter management."
  },
  {
    "question": "Which of the following best describes the role of the Tamm-Horsfall protein in preventing urinary tract infections?",
    "choices": [
      "Increases bladder acidity",
      "Enhances neutrophil activity in the kidney",
      "Prevents bacterial adhesion to epithelial cells",
      "Stimulates IgA production in urine",
      "Activates macrophages in renal tubules"
    ],
    "correctAnswer": 2,
    "explanation": "Tamm-Horsfall protein (uromodulin) binds bacterial adhesins and prevents uropathogen attachment to urothelial cells, particularly in the ascending limb. It is a key part of innate defense in the urinary tract. It does not significantly influence immune cell activation or pH."
  },
  {
    "question": "A 29-year-old primigravida is undergoing evaluation for vaginal delivery. Pelvimetry reveals that the obstetric conjugate is 10.5 cm. Which of the following structures determines the posterior limit of the obstetric conjugate?",
    "choices": [
      "Pubic symphysis",
      "Sacral promontory",
      "Ischial spines",
      "Coccyx",
      "Arcuate line"
    ],
    "correctAnswer": 1,
    "explanation": "The obstetric conjugate is the anteroposterior diameter of the pelvic inlet that extends from the sacral promontory to the posterior surface of the pubic symphysis. It is the narrowest fixed distance through which the fetal head must pass during delivery, making the sacral promontory the posterior limit."
  },
  {
    "question": "A 34-year-old woman is in active labor and requests regional anesthesia. The obstetrician performs a pudendal nerve block. Which of the following bony landmarks is used to guide the needle for this procedure?",
    "choices": [
      "Iliac crest",
      "Ischial tuberosity",
      "Pubic symphysis",
      "Ischial spine",
      "Sacral promontory"
    ],
    "correctAnswer": 3,
    "explanation": "The ischial spine is the anatomical landmark used to locate the pudendal nerve for regional anesthesia. The pudendal nerve exits the greater sciatic foramen, wraps around the ischial spine, and enters the perineum through the lesser sciatic foramen, making this site optimal for nerve block access."
  },
  {
    "question": "A 48-year-old man undergoes resection of a rectal carcinoma. Postoperatively, he reports erectile dysfunction. Injury to which of the following nerve structures is most likely responsible?",
    "choices": [
      "Ilioinguinal nerve",
      "Pelvic splanchnic nerves",
      "Pudendal nerve",
      "Genitofemoral nerve",
      "Inferior hypogastric plexus"
    ],
    "correctAnswer": 4,
    "explanation": "The inferior hypogastric plexus contains autonomic fibers including pelvic splanchnic nerves (S2–S4) responsible for parasympathetic innervation of pelvic organs, including erection. Surgical disruption of this plexus during rectal surgery can result in erectile dysfunction."
  },
  {
    "question": "A 38-year-old woman presents with urinary incontinence and pelvic organ prolapse 6 months after giving birth. Her delivery was prolonged and required forceps assistance. Injury to which of the following muscles most likely contributed to her symptoms?",
    "choices": [
      "Piriformis",
      "Coccygeus",
      "Obturator internus",
      "Levator ani",
      "Gluteus maximus"
    ],
    "correctAnswer": 3,
    "explanation": "The levator ani muscle, particularly its components pubococcygeus and puborectalis, supports pelvic organs and maintains continence. Injury during childbirth weakens this support, leading to prolapse and incontinence."
  },
  {
    "question": "A 45-year-old woman presents with left lower quadrant pain. Imaging reveals an ovarian cyst involving the left ovary, which lies below the pelvic pain line. Pain from this structure is most likely transmitted via which of the following pathways?",
    "choices": [
      "T10-L1 via lumbar splanchnics",
      "T12-L2 via hypogastric nerves",
      "S2-S4 via pelvic splanchnics",
      "T5-T9 via greater splanchnics",
      "L4-S1 via lumbosacral plexus"
    ],
    "correctAnswer": 2,
    "explanation": "Visceral afferents from pelvic organs located below the pelvic pain line (such as the ovary, cervix, and bladder neck) follow the parasympathetic pelvic splanchnic nerves (S2–S4) back to the spinal cord."
  },
  {
    "question": "A 27-year-old man is being evaluated for infertility. Semen analysis shows low volume and absent fructose. Obstruction of which of the following structures is the most likely cause?",
    "choices": [
      "Epididymis",
      "Prostate gland",
      "Ductus deferens",
      "Seminal vesicle",
      "Ejaculatory duct"
    ],
    "correctAnswer": 3,
    "explanation": "Seminal vesicles produce a majority of the ejaculate volume and secrete fructose. Obstruction of the seminal vesicle leads to low-volume, fructose-negative semen, often seen in congenital bilateral absence of the vas deferens or CFTR-related disorders."
  },
  {
    "question": "A 52-year-old man presents with painless rectal bleeding. Colonoscopy reveals dilated veins proximal to the pectinate line. Which venous system is most likely involved?",
    "choices": [
      "Inferior rectal veins",
      "External iliac veins",
      "Superior rectal veins",
      "Internal pudendal veins",
      "Inferior mesenteric veins"
    ],
    "correctAnswer": 2,
    "explanation": "Internal hemorrhoids arise from the superior rectal veins, which are part of the portal venous system. These are located above the pectinate line and are typically painless due to visceral innervation."
  },
  {
    "question": "A 70-year-old man is diagnosed with prostate cancer. Imaging shows metastatic spread to lymph nodes along the internal iliac vessels. These lymph nodes most likely receive direct lymphatic drainage from which of the following structures?",
    "choices": [
      "Testes",
      "Penile shaft",
      "Glans penis",
      "Prostate",
      "Scrotum"
    ],
    "correctAnswer": 3,
    "explanation": "The prostate drains primarily into the internal iliac lymph nodes. This pattern is clinically relevant for tracking prostate cancer spread. In contrast, the testes drain to para-aortic nodes and superficial perineal structures drain to inguinal nodes."
  },
  {
    "question": "A 35-year-old woman presents with severe lower abdominal pain and fever three days after undergoing pelvic surgery. A pelvic ultrasound reveals an anechoic fluid collection in the rectouterine pouch. Which of the following best explains why fluid accumulates in this anatomical location?",
    "choices": [
      "It is the most vascularized area of the peritoneal cavity",
      "It is the highest point in the supine position",
      "It lacks peritoneal covering",
      "It is the most dependent portion of the female peritoneal cavity",
      "It contains the suspensory ligament of the ovary"
    ],
    "correctAnswer": 3,
    "explanation": "The rectouterine pouch (pouch of Douglas) is the most dependent (lowest) portion of the female peritoneal cavity in upright or supine positions. This makes it a common site for pathological fluid accumulation such as pus or blood following pelvic surgery or infection. It is lined by peritoneum and is not the most vascularized area, nor does it contain the suspensory ligament of the ovary."
  },
  {
    "question": "A 60-year-old man presents with abdominal discomfort and signs of peritonitis. A CT scan shows free air and fluid accumulating in the rectovesical pouch. What is the clinical relevance of this finding?",
    "choices": [
      "It indicates a contained perforation limited to the sigmoid colon",
      "It confirms retroperitoneal hemorrhage",
      "It suggests intraperitoneal rupture of a hollow organ",
      "It implies abscess formation in the perineum",
      "It confirms bladder rupture from external trauma"
    ],
    "correctAnswer": 2,
    "explanation": "The rectovesical pouch is the most dependent peritoneal recess in males. Accumulation of air and fluid here typically indicates intraperitoneal rupture of a hollow organ, such as a perforated viscus. Retroperitoneal hemorrhage and perineal abscesses occur in extraperitoneal spaces. While bladder rupture can cause pelvic fluid, isolated rectovesical accumulation more strongly supports visceral perforation."
  },
  {
    "question": "A 36-year-old woman presents to the emergency department with sudden-onset lower abdominal pain and shoulder tip discomfort. She has missed her last menstrual period. Pelvic ultrasound reveals free fluid in the rectouterine pouch. Which of the following is the most likely explanation for this finding?",
    "choices": [
      "Ovarian torsion causing lymphatic rupture",
      "Pelvic inflammatory disease with tubo-ovarian abscess",
      "Ruptured ectopic pregnancy with hemoperitoneum",
      "Endometriosis with peritoneal implants",
      "Rupture of a corpus luteum cyst with serous fluid release"
    ],
    "correctAnswer": 2,
    "explanation": "The rectouterine pouch (pouch of Douglas) is the most dependent portion of the female peritoneal cavity, making it the first site where intraperitoneal blood accumulates in conditions like ruptured ectopic pregnancy. This presentation with acute pain, amenorrhea, and free fluid is classic. While other options can cause pelvic fluid, they are less acute or have different clinical courses."
  },
  {
    "question": "A 68-year-old man is undergoing evaluation for abdominal sepsis following bowel perforation. Imaging shows fluid collection in the rectovesical pouch. Which of the following best explains the significance of this anatomic site?",
    "choices": [
      "It is the most common site of prostate cancer invasion",
      "It provides a route of lymphatic drainage from the sigmoid colon",
      "It is the first site of dependent fluid accumulation in the male peritoneal cavity",
      "It allows direct communication between bladder and rectum",
      "It houses the vesicorectal ligament critical for continence"
    ],
    "correctAnswer": 2,
    "explanation": "The rectovesical pouch is the lowest part of the peritoneal cavity in males when upright or supine. It collects fluid from peritoneal inflammation, bleeding, or perforation. It does not directly involve the prostate, lymphatics, or continence. Recognizing this dependent space is critical for imaging and surgical drainage."
  },
  {
    "question": "A 79-year-old nursing home resident with dementia is evaluated for altered mental status. She is afebrile, has stable vital signs, and denies dysuria. Urinalysis shows pyuria and bacteriuria. What is the most appropriate next step in management?",
    "choices": [
      "Start empiric antibiotics for UTI",
      "Obtain urine culture and start treatment if positive",
      "Perform brain imaging to evaluate for intracranial pathology",
      "Observe without antibiotics",
      "Administer a single dose of fosfomycin"
    ],
    "correctAnswer": 3,
    "explanation": "This patient likely has asymptomatic bacteriuria (ASB), which is common in institutionalized elderly individuals and not an indication for antibiotic treatment unless specific symptoms are present. There is no reliable evidence correlating ASB with altered mental status without systemic signs. Empiric antibiotics in this setting contribute to resistance and are discouraged."
  },
  {
    "question": "A 28-year-old woman presents with dysuria and frequency for three days. She is afebrile and has no flank pain. Urinalysis reveals leukocyte esterase positivity and pyuria, but no nitrites. Urine culture grows 10^3 CFU of coagulase-negative Gram-positive cocci. Which organism is most likely responsible?",
    "choices": [
      "Escherichia coli",
      "Staphylococcus saprophyticus",
      "Enterococcus faecalis",
      "Proteus mirabilis",
      "Streptococcus agalactiae"
    ],
    "correctAnswer": 1,
    "explanation": "Staphylococcus saprophyticus is a common cause of uncomplicated cystitis in young sexually active women. It often presents with low colony counts and negative nitrites because it does not reduce nitrate to nitrite. E. coli is most common overall but typically shows nitrite positivity. Enterococcus and Streptococcus are less common in this demographic."
  },
  {
    "question": "A 64-year-old man with a Foley catheter develops fever and leukocytosis. Urinalysis shows pyuria. Blood cultures grow Staphylococcus aureus. What is the most appropriate next step in management?",
    "choices": [
      "Treat with oral TMP-SMX for 5 days",
      "Start empiric therapy with nitrofurantoin",
      "Order abdominal and pelvic imaging for occult source",
      "Switch Foley catheter to a suprapubic catheter",
      "Repeat urine culture in 72 hours"
    ],
    "correctAnswer": 2,
    "explanation": "Staphylococcus aureus bacteriuria in catheterized patients suggests possible hematogenous seeding or deep tissue infection (e.g., perinephric abscess). Bloodstream infection from S. aureus warrants imaging to identify possible metastatic foci. TMP-SMX and nitrofurantoin are insufficient for systemic infections. Changing catheters or repeating cultures does not address the systemic concern."
  },
  {
    "question": "Which of the following patients with asymptomatic bacteriuria requires antibiotic treatment?",
    "choices": [
      "An 80-year-old woman with Alzheimer’s disease and positive urine culture",
      "A 65-year-old man with an indwelling urinary catheter for chronic retention",
      "A 27-year-old pregnant woman at 12 weeks gestation with E. coli bacteriuria",
      "A 58-year-old woman with diabetes and chronic bacteriuria",
      "A 70-year-old man admitted to ICU without urinary symptoms"
    ],
    "correctAnswer": 2,
    "explanation": "The only clear indications for treating asymptomatic bacteriuria (ASB) are pregnancy and before invasive urological procedures. Pregnant women are treated to prevent pyelonephritis and preterm birth. Elderly, diabetic, or catheterized patients with ASB do not require treatment unless symptomatic or undergoing intervention."
  },
  {
    "question": "A 27-year-old woman presents with fatigue, joint pain, and a facial rash. She reports seeing multiple physicians over the past 3 years and being told that her symptoms were likely due to anxiety or depression. She expresses frustration and says she feels dismissed and unheard. Which of the following is the most appropriate approach during this visit?",
    "choices": [
      "Review her past lab tests and focus the visit on treatment planning",
      "Explain that systemic lupus erythematosus is difficult to diagnose and often missed",
      "Validate her experience, listen attentively, and ask about her support system",
      "Reassure her that she now has a diagnosis and symptoms will improve",
      "Immediately refer her to psychiatry for stress management"
    ],
    "correctAnswer": 2,
    "explanation": "Validating the patient's lived experience and listening empathetically are key to trauma-informed, patient-centered care, especially in chronic and often-misunderstood illnesses like lupus. This builds trust and helps repair the damage caused by diagnostic delays. Simply reviewing labs or referring to psychiatry risks perpetuating the dismissal she already experienced."
  },
  {
    "question": "A 34-year-old woman with systemic lupus erythematosus reports chronic fatigue, difficulty maintaining relationships, and feeling misunderstood by her family. She is hesitant to start immunosuppressive therapy due to a lack of support and emotional stress. What is the most appropriate next step in care?",
    "choices": [
      "Encourage her to increase physical activity to improve fatigue",
      "Refer her to a social support group and assess psychological distress",
      "Reassure her that emotional stress is not clinically relevant",
      "Order additional rheumatologic panels to confirm diagnosis",
      "Prescribe an SSRI without further evaluation"
    ],
    "correctAnswer": 1,
    "explanation": "Patients with SLE benefit from support groups and psychosocial support, which improve coping and reduce disease-related fatigue and depression. Validating emotional concerns and referring for resources such as social support groups and psychotherapy is crucial. Emotional stress is clinically relevant in SLE; dismissal can worsen outcomes."
  },
  {
    "question": "A 30-year-old woman newly diagnosed with systemic lupus erythematosus expresses concern about how long it took to receive a diagnosis despite years of symptoms. She appears withdrawn and says, 'I knew something was wrong, but no one believed me.' Which of the following responses best reflects effective clinical communication?",
    "choices": [
      "You’re right, lupus can be hard to catch. Let’s move forward with treatment.",
      "Don’t worry, now that we know what it is, we can handle it.",
      "That sounds incredibly difficult. I’m really glad you shared this with me.",
      "You may be overthinking how providers treated you before.",
      "Lupus labs can be unreliable, so your providers were being cautious."
    ],
    "correctAnswer": 2,
    "explanation": "Responding with validation and empathy models the '3-step clinician framework' for supporting patients with complex chronic illnesses like SLE. Acknowledging difficulty and expressing gratitude for the patient's openness promotes trust. Minimizing or explaining away past dismissal, even well-intentioned, can perpetuate feelings of invalidation."
  }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let answeredQuestions = JSON.parse(sessionStorage.getItem("answeredQuestions")) || new Array(quizData.length).fill(false);
let explanationsShown = JSON.parse(sessionStorage.getItem("explanationsShown")) || new Array(quizData.length).fill(false);
let selectedAnswers = JSON.parse(sessionStorage.getItem("selectedAnswers")) || new Array(quizData.length).fill(null);

// DOM Elements
const questionText = document.getElementById("question-text");
const choicesContainer = document.getElementById("choices-container");
const explanationBox = document.getElementById("explanation");
const progressText = document.getElementById("progress");
const correctText = document.getElementById("correct");
const incorrectText = document.getElementById("incorrect");
const questionList = document.getElementById("question-list");
const quizContainer = document.querySelector(".quiz-content");
const resultsContainer = document.getElementById("results-container");

// Display Hotkey Info Popup
window.onload = function() {
    alert("Welcome to the quiz!\n\nHotkeys Available:\n- Space: Next Question\n- B: Previous Question\n- 1-5: Select Answer Choices\n Anki remotes should be compatible! \n\nGood luck!");
};

// Load Questions into Sidebar
quizData.forEach((_, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = index + 1;
    listItem.classList.add("question-bubble");
    listItem.onclick = () => loadQuestion(index);
    listItem.setAttribute("data-index", index);
    questionList.appendChild(listItem);
});

// Load Question
function loadQuestion(index) {
    if (index >= quizData.length) {
        showResults();
        return;
    }

    currentQuestionIndex = index;
    const q = quizData[index];
    
    questionText.textContent = q.question;
    choicesContainer.innerHTML = "";
    
    q.choices.forEach((choice, i) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => checkAnswer(i, button);
        button.classList.add("choice-btn");
        
        if (selectedAnswers[currentQuestionIndex] !== null) {
            if (i === selectedAnswers[currentQuestionIndex]) {
                button.style.backgroundColor = selectedAnswers[currentQuestionIndex] === q.correctAnswer ? "green" : "red";
            }
            if (i === q.correctAnswer) {
                button.style.backgroundColor = "green";
            }
        }
        
        choicesContainer.appendChild(button);
    });

    if (explanationsShown[currentQuestionIndex]) {
        explanationBox.textContent = q.explanation;
        explanationBox.classList.remove("hidden");
    } else {
        explanationBox.textContent = "";
        explanationBox.classList.add("hidden");
    }

    updateProgress();
}

// Check Answer
function checkAnswer(selectedIndex, button) {
    if (answeredQuestions[currentQuestionIndex]) return; // Prevent multiple answers

    const q = quizData[currentQuestionIndex];
    explanationBox.textContent = q.explanation;
    explanationBox.classList.remove("hidden");

    const questionBubble = document.querySelector(`.question-bubble[data-index="${currentQuestionIndex}"]`);

    if (selectedIndex === q.correctAnswer) {
        button.style.backgroundColor = "green";
        questionBubble.style.backgroundColor = "green";
        correctAnswers++;
    } else {
        button.style.backgroundColor = "red";
        questionBubble.style.backgroundColor = "red";
        incorrectAnswers++;
        
        // Highlight correct answer in green
        const buttons = choicesContainer.getElementsByTagName("button");
        buttons[q.correctAnswer].style.backgroundColor = "green";
    }

    answeredQuestions[currentQuestionIndex] = true; // Mark as answered
    explanationsShown[currentQuestionIndex] = true; // Keep explanation visible
    selectedAnswers[currentQuestionIndex] = selectedIndex;
    
    sessionStorage.setItem("answeredQuestions", JSON.stringify(answeredQuestions));
    sessionStorage.setItem("explanationsShown", JSON.stringify(explanationsShown));
    sessionStorage.setItem("selectedAnswers", JSON.stringify(selectedAnswers));
    
    updateProgress();
}

// Update Progress
function updateProgress() {
    progressText.textContent = `${currentQuestionIndex + 1}/${quizData.length}`;
    correctText.textContent = correctAnswers;
    incorrectText.textContent = incorrectAnswers;
}

// Show Final Results Popup
function showResultsPopup() {
    const scorePercentage = ((correctAnswers / quizData.length) * 100).toFixed(2);
    alert(`Quiz Completed!\n\nYour Score: ${correctAnswers}/${quizData.length} (${scorePercentage}%)\n\nCongratulations on finishing the quiz!`);
}

// Navigation Controls
document.getElementById("next-btn").onclick = () => {
    if (currentQuestionIndex + 1 >= quizData.length) {
        showResultsPopup();
    } else {
        loadQuestion(currentQuestionIndex + 1);
    }
};
document.getElementById("prev-btn").onclick = () => loadQuestion(Math.max(currentQuestionIndex - 1, 0));

// Hotkey Navigation & Answer Selection
document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        loadQuestion(currentQuestionIndex + 1);
    } else if (event.code === "KeyB") {
        loadQuestion(Math.max(currentQuestionIndex - 1, 0));
    } else if (event.key >= "1" && event.key <= "5") {
        const answerIndex = parseInt(event.key) - 1;
        if (answerIndex < quizData[currentQuestionIndex].choices.length) {
            const buttons = choicesContainer.getElementsByTagName("button");
            if (buttons[answerIndex]) {
                buttons[answerIndex].click();
            }
        }
    }
});

// Load First Question on Start
loadQuestion(0);
