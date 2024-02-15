import React from "react";
import "./Présentation.css";
import st8 from "../assets/st8.jpeg"
const Présentation = () => {
  return (
    <div className="presentation">
   
           <h1>Qui sommes nous ?</h1>
        <div id="pp1">
          <img src={st8}/>
      
        <div id="pp11">
          {" "}
    
          <h2>Bienvenue chez Intact Home - Expert du nettoyage vapeur</h2>
          <p>
            Intact-Home une société tunisienne spécialisée dans le domaine de
            nettoyage à la vapeur à domicile en adoptant des pratiques
            innovantes et respectueux de l'environnement. nous sommes fiers de
            présenter une approche avant-. gardiste pour répondre aux besoins de
            nos clients.
          </p>
        </div>  </div>
    
      <div className="pp2">
        <h3>Nos points forts:</h3>
        <div id="pp22">
        <section><span>Technologie de pointe:</span>Utilisant des equipements de
            nettoyage vapeur de derniére génération .nous assurons une
            élimination efficace des saletés ,bactéries et allergénes tout en
            préservant l'environnement.</section>
            
      
          <section>    <span>Écologie et durabilité:</span>
            Notre engagement envers l'écologie guide nos pratiques:le nettoyage
            vapeur minimise l'utilisation de produits chimiques,contribuant
            ainsi àala préservation de la planete tout en offrant un
            environnement sain.</section>
        
          <section>      <span> Flexibilité des Horaires : </span>Nous comprenons
            l'importance de La flexibilité dans le séctéur du nettoyage. Nous
            sommes prèts à adapter nos horaires pour minimiser toute
            perturbation dans votre quotidien ou dans vos activités
            professionnelles.</section>

            
      
       
        </div>
      </div>
      <div className="pp3">
        <h3>Pourquoi nous choisir?</h3>
       
        <div id="pp31"> 
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
</svg>
        <p>
          <span>Professionnalisme:</span> Notre équipe dédiée de professionnels
          du nettoyage est formée pour garantir des résultats exceptionnels.
        </p></div>
        <div id="pp31">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-lightbulb-fill" viewBox="0 0 16 16">
  <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5"/>
</svg>
          <p><span>Innovation : </span>En adoptant les dernières avancées
technologiques, nous nous positionnons en tant que
pionniers du nettoyage vapeur.</p>
        </div>
        <div id="pp31">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
  <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
</svg>
  <p><span>Engagement Environnemental :</span> Nous agissons avec responsabilité pour minimiser notre
impact écologique, en utilisant des méthodes de nettoyage respectueuses de l'environnement.</p>
        </div>
      </div>
    </div>
  );
};

export default Présentation;
