import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Challenge } from '../models/challenge';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {
private challengesSubject:BehaviorSubject<Challenge[]>=new BehaviorSubject<Challenge[]>([])
  challenges$:Observable<Challenge[]>;

constructor(private http:HttpClient) {
this.challenges$=this.challengesSubject.asObservable();
 }
 getAllChallenges(){
  this.http.get<Challenge[]>(`http://localhost:5037/api/Challenge/challenges`).subscribe({
    next:(data)=>{
      this.challengesSubject.next(data);
    },error:(e)=>{
  
   }})
 }
 getActiveChallenges(){
this.http.get<Challenge[]>(`http://localhost:5037/api/Challenge/active`).subscribe({
  next:(data)=>{
    this.challengesSubject.next(data);
  },error:(e)=>{

 }})
 }
 getChallengeById(challengeId:number){
this.http.get<Challenge>(`http://localhost:5037/api/Challenge/${challengeId}`).subscribe({
  next:(response)=>{
return response;
  },error:(e)=>{

  }
})
 }
 getNotActiveChallenge(){
this.http.get<Challenge[]>(`http://localhost:5037/api/Challenge/finished`).subscribe({
  next:(data)=>{
    this.challengesSubject.next(data);
  },error:(e)=>{

 }})
 }
 addChallenge(challenge:Challenge){
  console.log("in add service1"); 
  this.http.post(`http://localhost:5037/api/Challenge/create`,challenge).subscribe({
    next:(response)=>{
      this.getAllChallenges();
      console.log("in add service2");
  },error:(e)=>{
    console.log("error");  
  }
})
 }
 updateChallenge(challengeId:number,status:string){
  this.http.put(`http://localhost:5037/api/Challenge/${challengeId}/update-status`,status).subscribe({
    next:(response)=>{
      this.getAllChallenges();
    },error:(e)=>{
      console.log("errorrrrrrrrrrr");  
    }
  })
   }
 }

