import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function AboutSection(){


    return(


    <div className="about-section">


      <div data-aos="fade-right" data-aos-offset="0" data-aos-duration="1200" className="about-container">

            <h2 className="about-title">Learn about Diabetes</h2>

            <div className="about-content">


                <div className="diabetes-intro content">

                    <h2>What is Diabetes ?</h2>

                    <p>Diabetes is a chronic disease that occurs when the body is unable to effectively use the insulin 
                        it produces (Type 2 Diabetes) or when the pancreas does not produce enough insulin (Type 1 
                        Diabetes). Insulin is a hormone that regulates blood sugar. The subsequent build-up of sugar
                         in your blood can lead to serious health problems.</p>


                    <ul className="list-type-1">

                        <li className="diabtes-type"> <span>• Type 1 diabetes:</span> Your body can't make insulin due to autoimmune dysfunction.</li>
                    
                        <li className="diabtes-type"> <span>• Type 2 diabetes:</span> This is the most common and occurs when your body is unable to properly use insulin. </li>

                        <li className="diabtes-type"> <span>• Gestational diabetes:</span> This is caused by pregnancy.</li>

                    </ul>

                   
                   

                </div>
                


                <div className="gen-symptoms content">

                    <h2>General Symptoms </h2>

                    <p>The following symptoms can potentially affect anyone with diabetes:</p>

                    <ul className="gen-symptoms-list">
                        <li className="gen-symptom-item"> • Increased <a href="https://www.healthline.com/health/diabetes/diabetes-thirst">Thirst</a> and <a href="https://www.healthline.com/health/polyphagia">Hunger</a></li>
                        <li className="gen-symptom-item">• <a href="https://www.healthline.com/health/frequent-urination-diabetes"> Frequent urination</a></li>
                        <li className="gen-symptom-item">•  <a href="https://www.healthline.com/health/diabetes/diabetes-weight-loss">Weight Loss</a> or Weight Gain with no obvious cause </li>
                        <li className="gen-symptom-item">• <a href="https://www.healthline.com/health/diabetes/fatigue">Fatigue</a></li>
                        <li className="gen-symptom-item">• <a href="https://www.healthline.com/health/diabetes/is-diabetes-causing-my-nausea">Nausea</a></li>
                        <li className="gen-symptom-item">• <a href="https://www.healthline.com/health/diabetes/blurry-vision">Blurry vision</a></li>
                        <li className="gen-symptom-item">•  Slow<a href="https://www.healthline.com/health/diabetes/diabetes-and-wound-healing"> Wound Healing </a></li>
                        <li className="gen-symptom-item">• <a href="https://www.healthline.com/health/type-2-diabetes/skin-problems">Skin infections</a></li>
                        <li className="gen-symptom-item">• <a href="https://www.healthline.com/health/acanthosis-nigricans">Acanthosis nigricans</a>, or patches of darker skin at the armpits, groin, and back of the neck</li>
                        <li className="gen-symptom-item">• Irritability</li>
                        <li className="gen-symptom-item">• <a href="https://www.healthline.com/health/diabetes/bad-breath">Breath</a> that has a sweet, fruity, or acetone-like odor</li>
                        <li className="gen-symptom-item">• Reduced feeling in the hands or feet</li>
                    </ul>

                    <p>However, keep in mind that many people with type 2 diabetes have no noticeable symptoms at all.</p>

                </div>



                <div className="diabetes-women content">

                    <h2>Diabetes in Women</h2>

                    <p>A <a href="https://bmcmedicine.biomedcentral.com/articles/10.1186/s12916-019-1355-0"> 2019 literature review Trusted Source</a> looked at the link between diabetes and poor health outcomes in well over 5.1 million people across 49 studies. Researchers found that, when compared to men with 
                     diabetes, women with diabetes experienced:</p>

                    <ul className="risk-list list-type-1">

                        <li className="risk">•  13% greater risk of death from all causes</li>

                        <li className="risk">•  30% greater risk of death from <a href="https://www.healthline.com/health/heart-disease">cardiovascular disease</a> </li>

                        <li className="risk">•  58% greater risk of death from <a href="https://www.healthline.com/health/coronary-artery-disease">coronary heart disease</a></li>

                    </ul>


                </div>




                <div className="additional-women-info content">

                    <div className="additonal-women-content">
                    Women may additionally experience candida infections, urinary tract infections
                     (UTIs), and vaginal dryness, among others.
                    </div>

                </div>





                <div className="women-symptoms content">

                    <h2>Symptoms of Diabetes in Women</h2>

                    <div class="women-symp-container">

                        <div class="1 symp-box">
                           <p class="info">Candida infections</p>
                        </div>

                        <div class="2 symp-box">
                            <p class="info">Candida infections</p>
                        </div>

                        <div class="3 symp-box">         
                           <p class="info">Vaginal dryness</p>
                        </div>

                        <div class="4 symp-box">
                           <p class="info">Polycystic ovary syndrome (PCOS)</p>
                        </div>

                        <div class="5 symp-box">
                            <p class="info">Polycystic ovary syndrome (PCOS)</p>
                        </div>

                    </div>


                </div>



            </div>

        </div>
        
     </div>
    ) ;

}

export default AboutSection ;