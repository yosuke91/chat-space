class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
end
 
class user < ActiveRecord::Base
  has_many :groups_users
  has_many :groups, through: :groups_users
end

class groups < ActiveRecord::Base
  has_many :groups_users
  has_many :users, through: :groups_users
end
