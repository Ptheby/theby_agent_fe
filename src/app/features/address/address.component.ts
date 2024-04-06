// import { Component } from '@angular/core';
// import { AgentService } from '../../agent/agent.service';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-address',
//   standalone: true,
//   imports: [],
//   templateUrl: './address.component.html',
//   styleUrl: './address.component.css'
// })
// export class AddressComponent {


// constructor(
//     private agentService: AgentService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) {}
//   ngOnInit(): void {
//     this.route.params.subscribe((params) => {
//       const agentId = +params['id']; // Extract agent ID from route parameters
//       console.log('agentID:', agentId);
//       this.agentService.getAgentById(agentId).subscribe((data: Agent) => {
//         this = data;

//         // Set the customer details
//       });
//     });
//   }
// }
